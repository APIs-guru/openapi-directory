from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class MoveOrganizationLicensesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MoveOrganizationLicensesRequestBody:
    dest_organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destOrganizationId' }})
    license_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseIds' }})
    

@dataclass
class MoveOrganizationLicensesRequest:
    path_params: MoveOrganizationLicensesPathParams = field(default=None)
    request: MoveOrganizationLicensesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MoveOrganizationLicensesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    move_organization_licenses_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
