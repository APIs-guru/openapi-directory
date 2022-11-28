from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateLicenseePathParams:
    licensee_number: str = field(metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLicenseeRequestBody:
    active: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'active' }})
    marked_for_transfer: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'markedForTransfer' }})
    name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    

@dataclass
class UpdateLicenseeSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateLicenseeRequest:
    path_params: UpdateLicenseePathParams = field()
    security: UpdateLicenseeSecurity = field()
    request: Optional[UpdateLicenseeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateLicenseeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
