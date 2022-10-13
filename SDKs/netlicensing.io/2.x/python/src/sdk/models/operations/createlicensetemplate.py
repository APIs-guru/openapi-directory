from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CreateLicenseTemplateRequestBody:
    active: bool = field(default=None, metadata={'form': { 'field_name': 'active' }})
    automatic: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'automatic' }})
    currency: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'currency' }})
    hidden: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'hidden' }})
    hide_licenses: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'hideLicenses' }})
    license_type: str = field(default=None, metadata={'form': { 'field_name': 'licenseType' }})
    max_sessions: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'maxSessions' }})
    name: str = field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    price: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'price' }})
    product_module_number: str = field(default=None, metadata={'form': { 'field_name': 'productModuleNumber' }})
    quantity: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'quantity' }})
    quota: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'quota' }})
    time_volume: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'timeVolume' }})
    time_volume_period: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'timeVolumePeriod' }})
    

@dataclass
class CreateLicenseTemplateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateLicenseTemplateRequest:
    request: CreateLicenseTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateLicenseTemplateSecurity = field(default=None)
    

@dataclass
class CreateLicenseTemplateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
