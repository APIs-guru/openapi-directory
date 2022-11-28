from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class AssignOrganizationLicensesSeatsPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AssignOrganizationLicensesSeatsRequestBody:
    license_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseId') }})
    network_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkId') }})
    seat_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('seatCount') }})
    

@dataclass
class AssignOrganizationLicensesSeatsRequest:
    path_params: AssignOrganizationLicensesSeatsPathParams = field()
    request: AssignOrganizationLicensesSeatsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssignOrganizationLicensesSeatsResponse:
    content_type: str = field()
    status_code: int = field()
    assign_organization_licenses_seats_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
