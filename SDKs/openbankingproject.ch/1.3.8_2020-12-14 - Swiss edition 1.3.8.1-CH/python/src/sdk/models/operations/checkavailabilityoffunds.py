from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CheckAvailabilityOfFundsHeaders:
    x_request_id: str = field(metadata={'header': { 'field_name': 'X-Request-ID', 'style': 'simple', 'explode': False }})
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    digest: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Digest', 'style': 'simple', 'explode': False }})
    signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Signature', 'style': 'simple', 'explode': False }})
    tpp_signature_certificate: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckAvailabilityOfFundsSecurity:
    bearer_auth_o_auth: Optional[shared.SchemeBearerAuthOAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CheckAvailabilityOfFunds200ApplicationJSON:
    r"""CheckAvailabilityOfFunds200ApplicationJSON
    Equals \"true\" if sufficient funds are available at the time of the request,
    \"false\" otherwise.
    
    """
    
    funds_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundsAvailable') }})
    

@dataclass
class CheckAvailabilityOfFundsRequest:
    headers: CheckAvailabilityOfFundsHeaders = field()
    request: shared.ConfirmationOfFunds = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CheckAvailabilityOfFundsSecurity = field()
    

@dataclass
class CheckAvailabilityOfFundsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
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
    check_availability_of_funds_200_application_json_object: Optional[CheckAvailabilityOfFunds200ApplicationJSON] = field(default=None)
    
