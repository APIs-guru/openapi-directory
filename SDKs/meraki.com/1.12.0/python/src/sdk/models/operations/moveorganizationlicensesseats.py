from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class MoveOrganizationLicensesSeatsPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MoveOrganizationLicensesSeatsRequestBody:
    dest_organization_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destOrganizationId') }})
    license_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseId') }})
    seat_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatCount') }})
    

@dataclass
class MoveOrganizationLicensesSeatsRequest:
    path_params: MoveOrganizationLicensesSeatsPathParams = field()
    request: MoveOrganizationLicensesSeatsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MoveOrganizationLicensesSeatsResponse:
    content_type: str = field()
    status_code: int = field()
    move_organization_licenses_seats_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
