from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ClaimIntoOrganizationPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class ClaimIntoOrganizationRequestBodyLicensesModeEnum(str, Enum):
    ADD_DEVICES = "addDevices"
    RENEW = "renew"


@dataclass_json
@dataclass
class ClaimIntoOrganizationRequestBodyLicenses:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    mode: Optional[ClaimIntoOrganizationRequestBodyLicensesModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclass
class ClaimIntoOrganizationRequestBody:
    licenses: Optional[List[ClaimIntoOrganizationRequestBodyLicenses]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenses') }})
    orders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    serials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    

@dataclass
class ClaimIntoOrganizationRequest:
    path_params: ClaimIntoOrganizationPathParams = field()
    request: Optional[ClaimIntoOrganizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ClaimIntoOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    claim_into_organization_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
