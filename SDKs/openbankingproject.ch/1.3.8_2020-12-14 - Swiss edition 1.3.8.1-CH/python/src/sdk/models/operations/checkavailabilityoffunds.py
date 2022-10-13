from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CheckAvailabilityOfFundsHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    digest: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Digest' }})
    signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Signature' }})
    tpp_signature_certificate: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate' }})
    x_request_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Request-ID' }})
    

@dataclass
class CheckAvailabilityOfFundsSecurity:
    bearer_auth_o_auth: Optional[shared.SchemeBearerAuthOAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CheckAvailabilityOfFundsRequest:
    headers: CheckAvailabilityOfFundsHeaders = field(default=None)
    request: shared.ConfirmationOfFunds = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CheckAvailabilityOfFundsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CheckAvailabilityOfFunds200ApplicationJSON:
    funds_available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundsAvailable' }})
    

@dataclass
class CheckAvailabilityOfFundsResponse:
    content_type: str = field(default=None)
    error400_ais: Optional[shared.Error400Ais] = field(default=None)
    error400_ng_ais: Optional[shared.Error400NgAis] = field(default=None)
    error401_ng_piis: Optional[shared.Error401NgPiis] = field(default=None)
    error401_piis: Optional[shared.Error401Piis] = field(default=None)
    error403_ng_piis: Optional[shared.Error403NgPiis] = field(default=None)
    error403_piis: Optional[shared.Error403Piis] = field(default=None)
    error404_ng_piis: Optional[shared.Error404NgPiis] = field(default=None)
    error404_piis: Optional[shared.Error404Piis] = field(default=None)
    error405_ng_piis: Optional[shared.Error405NgPiis] = field(default=None)
    error405_piis: Optional[shared.Error405Piis] = field(default=None)
    error409_ng_piis: Optional[shared.Error409NgPiis] = field(default=None)
    error409_piis: Optional[shared.Error409Piis] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    check_availability_of_funds_200_application_json_object: Optional[CheckAvailabilityOfFunds200ApplicationJSON] = field(default=None)
    
