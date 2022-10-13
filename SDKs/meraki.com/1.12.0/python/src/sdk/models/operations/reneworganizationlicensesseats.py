from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class RenewOrganizationLicensesSeatsPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RenewOrganizationLicensesSeatsRequestBody:
    license_id_to_renew: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseIdToRenew' }})
    unused_license_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unusedLicenseId' }})
    

@dataclass
class RenewOrganizationLicensesSeatsRequest:
    path_params: RenewOrganizationLicensesSeatsPathParams = field(default=None)
    request: RenewOrganizationLicensesSeatsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RenewOrganizationLicensesSeatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    renew_organization_licenses_seats_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
