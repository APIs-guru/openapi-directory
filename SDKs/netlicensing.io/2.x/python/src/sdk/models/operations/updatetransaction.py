from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UpdateTransactionPathParams:
    transaction_number: str = field(metadata={'path_param': { 'field_name': 'transactionNumber', 'style': 'simple', 'explode': False }})
    
class UpdateTransactionRequestBodySourceEnum(str, Enum):
    SHOP = "SHOP"

class UpdateTransactionRequestBodyStatusEnum(str, Enum):
    CANCELLED = "CANCELLED"
    CLOSED = "CLOSED"
    PENDING = "PENDING"


@dataclass
class UpdateTransactionRequestBody:
    active: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'active' }})
    date_closed: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'dateClosed' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'dateCreated' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    payment_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'paymentMethod' }})
    source: Optional[UpdateTransactionRequestBodySourceEnum] = field(default=None, metadata={'form': { 'field_name': 'source' }})
    status: Optional[UpdateTransactionRequestBodyStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'status' }})
    

@dataclass
class UpdateTransactionSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTransactionRequest:
    path_params: UpdateTransactionPathParams = field()
    security: UpdateTransactionSecurity = field()
    request: Optional[UpdateTransactionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
