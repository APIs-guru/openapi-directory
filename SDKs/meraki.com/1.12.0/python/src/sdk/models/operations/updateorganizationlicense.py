from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationLicensePathParams:
    license_id: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationLicenseRequestBody:
    device_serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceSerial' }})
    

@dataclass
class UpdateOrganizationLicenseRequest:
    path_params: UpdateOrganizationLicensePathParams = field(default=None)
    request: Optional[UpdateOrganizationLicenseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationLicenseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_license_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
