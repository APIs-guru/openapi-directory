from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class MoveOrganizationLicensesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MoveOrganizationLicensesRequestBody:
    dest_organization_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destOrganizationId') }})
    license_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseIds') }})
    

@dataclass
class MoveOrganizationLicensesRequest:
    path_params: MoveOrganizationLicensesPathParams = field()
    request: MoveOrganizationLicensesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MoveOrganizationLicensesResponse:
    content_type: str = field()
    status_code: int = field()
    move_organization_licenses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
