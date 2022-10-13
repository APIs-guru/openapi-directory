from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional

class CreateTransactionRequestBodySourceEnum(str, Enum):
    SHOP = "SHOP"

class CreateTransactionRequestBodyStatusEnum(str, Enum):
    CANCELLED = "CANCELLED"
    CLOSED = "CLOSED"
    PENDING = "PENDING"


@dataclass
class CreateTransactionRequestBody:
    active: bool = field(default=None, metadata={'form': { 'field_name': 'active' }})
    date_closed: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'dateClosed' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'dateCreated' }})
    licensee_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licenseeNumber' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    payment_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'paymentMethod' }})
    source: CreateTransactionRequestBodySourceEnum = field(default=None, metadata={'form': { 'field_name': 'source' }})
    status: CreateTransactionRequestBodyStatusEnum = field(default=None, metadata={'form': { 'field_name': 'status' }})
    

@dataclass
class CreateTransactionSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTransactionRequest:
    request: Optional[CreateTransactionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTransactionSecurity = field(default=None)
    

@dataclass
class CreateTransactionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
