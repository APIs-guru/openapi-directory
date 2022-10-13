from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class UpdateLicensePathParams:
    license_number: str = field(default=None, metadata={'path_param': { 'field_name': 'licenseNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLicenseRequestBody:
    active: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'active' }})
    currency: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'currency' }})
    hidden: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'hidden' }})
    name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    parentfeature: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'parentfeature' }})
    price: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'price' }})
    quantity: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'quantity' }})
    start_date: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'startDate' }})
    time_volume: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'timeVolume' }})
    time_volume_period: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'timeVolumePeriod' }})
    used_quantity: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'usedQuantity' }})
    

@dataclass
class UpdateLicenseSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateLicenseRequest:
    path_params: UpdateLicensePathParams = field(default=None)
    request: Optional[UpdateLicenseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateLicenseSecurity = field(default=None)
    

@dataclass
class UpdateLicenseResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
