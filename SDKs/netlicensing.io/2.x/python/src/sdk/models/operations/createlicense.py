from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateLicenseRequestBody:
    active: bool = field(metadata={'form': { 'field_name': 'active' }})
    license_template_number: str = field(metadata={'form': { 'field_name': 'licenseTemplateNumber' }})
    licensee_number: str = field(metadata={'form': { 'field_name': 'licenseeNumber' }})
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
class CreateLicenseSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateLicenseRequest:
    request: CreateLicenseRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateLicenseSecurity = field()
    

@dataclass
class CreateLicenseResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
