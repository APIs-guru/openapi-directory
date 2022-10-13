from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class AssignOrganizationLicensesSeatsPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AssignOrganizationLicensesSeatsRequestBody:
    license_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseId' }})
    network_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkId' }})
    seat_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seatCount' }})
    

@dataclass
class AssignOrganizationLicensesSeatsRequest:
    path_params: AssignOrganizationLicensesSeatsPathParams = field(default=None)
    request: AssignOrganizationLicensesSeatsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssignOrganizationLicensesSeatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    assign_organization_licenses_seats_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
