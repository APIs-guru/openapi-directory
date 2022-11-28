from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateLicenseTemplateRequestBody:
    active: bool = field(metadata={'form': { 'field_name': 'active' }})
    license_type: str = field(metadata={'form': { 'field_name': 'licenseType' }})
    name: str = field(metadata={'form': { 'field_name': 'name' }})
    product_module_number: str = field(metadata={'form': { 'field_name': 'productModuleNumber' }})
    automatic: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'automatic' }})
    currency: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'currency' }})
    hidden: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'hidden' }})
    hide_licenses: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'hideLicenses' }})
    max_sessions: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'maxSessions' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    price: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'price' }})
    quantity: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'quantity' }})
    quota: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'quota' }})
    time_volume: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'timeVolume' }})
    time_volume_period: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'timeVolumePeriod' }})
    

@dataclass
class CreateLicenseTemplateSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateLicenseTemplateRequest:
    request: CreateLicenseTemplateRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateLicenseTemplateSecurity = field()
    

@dataclass
class CreateLicenseTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
