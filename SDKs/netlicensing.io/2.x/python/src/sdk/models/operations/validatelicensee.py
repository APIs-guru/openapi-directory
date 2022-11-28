from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ValidateLicenseePathParams:
    licensee_number: str = field(metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    
class ValidateLicenseeRequestBodyActionEnum(str, Enum):
    CHECK_OUT = "checkOut"
    CHECK_IN = "checkIn"


@dataclass
class ValidateLicenseeRequestBody:
    action: Optional[ValidateLicenseeRequestBodyActionEnum] = field(default=None, metadata={'form': { 'field_name': 'action' }})
    licensee_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licenseeName' }})
    node_secret: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'nodeSecret' }})
    product_module_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'productModuleNumber' }})
    product_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'productNumber' }})
    session_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'sessionId' }})
    

@dataclass
class ValidateLicenseeSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ValidateLicenseeRequest:
    path_params: ValidateLicenseePathParams = field()
    security: ValidateLicenseeSecurity = field()
    request: Optional[ValidateLicenseeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class ValidateLicenseeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
