from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RenewOrganizationLicensesSeatsPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RenewOrganizationLicensesSeatsRequestBody:
    license_id_to_renew: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseIdToRenew') }})
    unused_license_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unusedLicenseId') }})
    

@dataclass
class RenewOrganizationLicensesSeatsRequest:
    path_params: RenewOrganizationLicensesSeatsPathParams = field()
    request: RenewOrganizationLicensesSeatsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RenewOrganizationLicensesSeatsResponse:
    content_type: str = field()
    status_code: int = field()
    renew_organization_licenses_seats_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
