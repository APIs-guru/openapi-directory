from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateTransactionRequestBodySourceEnum(str, Enum):
    SHOP = "SHOP"

class CreateTransactionRequestBodyStatusEnum(str, Enum):
    CANCELLED = "CANCELLED"
    CLOSED = "CLOSED"
    PENDING = "PENDING"


@dataclass
class CreateTransactionRequestBody:
    active: bool = field(metadata={'form': { 'field_name': 'active' }})
    source: CreateTransactionRequestBodySourceEnum = field(metadata={'form': { 'field_name': 'source' }})
    status: CreateTransactionRequestBodyStatusEnum = field(metadata={'form': { 'field_name': 'status' }})
    date_closed: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'dateClosed' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'dateCreated' }})
    licensee_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licenseeNumber' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    payment_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'paymentMethod' }})
    

@dataclass
class CreateTransactionSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTransactionRequest:
    security: CreateTransactionSecurity = field()
    request: Optional[CreateTransactionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CreateTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
