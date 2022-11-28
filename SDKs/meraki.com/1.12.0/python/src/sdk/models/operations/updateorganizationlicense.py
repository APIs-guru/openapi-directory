from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationLicensePathParams:
    license_id: str = field(metadata={'path_param': { 'field_name': 'licenseId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateOrganizationLicenseRequestBody:
    device_serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSerial') }})
    

@dataclass
class UpdateOrganizationLicenseRequest:
    path_params: UpdateOrganizationLicensePathParams = field()
    request: Optional[UpdateOrganizationLicenseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationLicenseResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_license_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
