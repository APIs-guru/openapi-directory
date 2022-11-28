from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationLicensePathParams:
    license_id: str = field(metadata={'path_param': { 'field_name': 'licenseId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationLicenseRequest:
    path_params: GetOrganizationLicensePathParams = field()
    

@dataclass
class GetOrganizationLicenseResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_license_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
