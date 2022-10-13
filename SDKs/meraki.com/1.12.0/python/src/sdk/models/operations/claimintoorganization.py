from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ClaimIntoOrganizationPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class ClaimIntoOrganizationRequestBodyLicensesModeEnum(str, Enum):
    ADD_DEVICES = "addDevices"
    RENEW = "renew"


@dataclass_json
@dataclass
class ClaimIntoOrganizationRequestBodyLicenses:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    mode: Optional[ClaimIntoOrganizationRequestBodyLicensesModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    

@dataclass_json
@dataclass
class ClaimIntoOrganizationRequestBody:
    licenses: Optional[List[ClaimIntoOrganizationRequestBodyLicenses]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenses' }})
    orders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orders' }})
    serials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serials' }})
    

@dataclass
class ClaimIntoOrganizationRequest:
    path_params: ClaimIntoOrganizationPathParams = field(default=None)
    request: Optional[ClaimIntoOrganizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ClaimIntoOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    claim_into_organization_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
