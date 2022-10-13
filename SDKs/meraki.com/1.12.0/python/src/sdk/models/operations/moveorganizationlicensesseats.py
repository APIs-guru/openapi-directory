from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class MoveOrganizationLicensesSeatsPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MoveOrganizationLicensesSeatsRequestBody:
    dest_organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destOrganizationId' }})
    license_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseId' }})
    seat_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seatCount' }})
    

@dataclass
class MoveOrganizationLicensesSeatsRequest:
    path_params: MoveOrganizationLicensesSeatsPathParams = field(default=None)
    request: MoveOrganizationLicensesSeatsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MoveOrganizationLicensesSeatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    move_organization_licenses_seats_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
