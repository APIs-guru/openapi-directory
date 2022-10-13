from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateLicenseTemplatePathParams:
    license_template_number: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseTemplateNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLicenseTemplateRequestBody:
    active: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'active' }})
    automatic: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'automatic' }})
    currency: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'currency' }})
    hidden: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'hidden' }})
    hide_licenses: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'hideLicenses' }})
    license_type: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licenseType' }})
    max_sessions: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'maxSessions' }})
    name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    price: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'price' }})
    quantity: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'quantity' }})
    quota: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'quota' }})
    time_volume: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'timeVolume' }})
    time_volume_period: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'timeVolumePeriod' }})
    

@dataclass
class UpdateLicenseTemplateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateLicenseTemplateRequest:
    path_params: UpdateLicenseTemplatePathParams = field(default=None)
    request: Optional[UpdateLicenseTemplateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateLicenseTemplateSecurity = field(default=None)
    

@dataclass
class UpdateLicenseTemplateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
