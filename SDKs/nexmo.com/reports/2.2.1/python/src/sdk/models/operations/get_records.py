from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetRecordsDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class GetRecordsProductEnum(str, Enum):
    SMS = "SMS"
    VOICE_CALL = "VOICE-CALL"
    VOICE_FAILED = "VOICE-FAILED"
    IN_APP_VOICE = "IN-APP-VOICE"
    WEBSOCKET_CALL = "WEBSOCKET-CALL"
    VERIFY_API = "VERIFY-API"
    NUMBER_INSIGHT = "NUMBER-INSIGHT"
    MESSAGES = "MESSAGES"
    ASR = "ASR"
    CONVERSATIONS = "CONVERSATIONS"
    REPORTS_USAGE = "REPORTS-USAGE"

class GetRecordsStatusEnum(str, Enum):
    DELIVERED = "delivered"
    EXPIRED = "expired"
    FAILED = "failed"
    REJECTED = "rejected"
    ACCEPTED = "accepted"
    BUFFERED = "buffered"
    UNKNOWN = "unknown"
    DELETED = "deleted"


@dataclass
class GetRecordsQueryParams:
    account_id: str = field(default=None, metadata={'query_param': { 'field_name': 'account_id', 'style': 'form', 'explode': True }})
    date_end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    direction: Optional[GetRecordsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include_message: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_message', 'style': 'form', 'explode': True }})
    product: GetRecordsProductEnum = field(default=None, metadata={'query_param': { 'field_name': 'product', 'style': 'form', 'explode': True }})
    show_concatenated: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'show_concatenated', 'style': 'form', 'explode': True }})
    status: Optional[GetRecordsStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecordsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRecordsRequest:
    query_params: GetRecordsQueryParams = field(default=None)
    security: GetRecordsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON1LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON1Links:
    self: Optional[GetRecords200ApplicationJSON1LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
class GetRecords200ApplicationJSON1DirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclass
class GetRecords200ApplicationJSON1:
    links: Optional[GetRecords200ApplicationJSON1Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    direction: Optional[GetRecords200ApplicationJSON1DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    include_message: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_message' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductSmsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.JSONSmsOutboundWithBody]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    show_concatenated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_concatenated' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON2LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON2Links:
    self: Optional[GetRecords200ApplicationJSON2LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
class GetRecords200ApplicationJSON2DirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclass
class GetRecords200ApplicationJSON2:
    links: Optional[GetRecords200ApplicationJSON2Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    direction: Optional[GetRecords200ApplicationJSON2DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    include_message: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_message' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductSmsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.JSONSmsInboundWithBody]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    show_concatenated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_concatenated' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON3LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON3Links:
    self: Optional[GetRecords200ApplicationJSON3LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON3:
    links: Optional[GetRecords200ApplicationJSON3Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductVoiceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.CsvVoice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON4LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON4Links:
    self: Optional[GetRecords200ApplicationJSON4LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON4:
    links: Optional[GetRecords200ApplicationJSON4Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductInAppVoiceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.CsvInAppVoice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON5LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON5Links:
    self: Optional[GetRecords200ApplicationJSON5LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON5:
    links: Optional[GetRecords200ApplicationJSON5Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductWebsocketEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.CsvWebsockets]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON6LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON6Links:
    self: Optional[GetRecords200ApplicationJSON6LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON6:
    links: Optional[GetRecords200ApplicationJSON6Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductVerifyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.CsvVerify]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON7LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON7Links:
    self: Optional[GetRecords200ApplicationJSON7LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON7:
    links: Optional[GetRecords200ApplicationJSON7Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductNiEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.CsvNi]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON8LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON8Links:
    self: Optional[GetRecords200ApplicationJSON8LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
class GetRecords200ApplicationJSON8DirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclass
class GetRecords200ApplicationJSON8:
    links: Optional[GetRecords200ApplicationJSON8Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    direction: Optional[GetRecords200ApplicationJSON8DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    include_message: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_message' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductMessagesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.CsvMessagesOutbound]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    show_concatenated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_concatenated' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON9LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON9Links:
    self: Optional[GetRecords200ApplicationJSON9LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
class GetRecords200ApplicationJSON9DirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"


@dataclass_json
@dataclass
class GetRecords200ApplicationJSON9:
    links: Optional[GetRecords200ApplicationJSON9Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    direction: Optional[GetRecords200ApplicationJSON9DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    include_message: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_message' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductMessagesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.CsvMessagesInbound]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    show_concatenated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_concatenated' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON10LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON10Links:
    self: Optional[GetRecords200ApplicationJSON10LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON10:
    links: Optional[GetRecords200ApplicationJSON10Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductAsrEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.CsvAsr]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON11LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON11Links:
    self: Optional[GetRecords200ApplicationJSON11LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetRecords200ApplicationJSON11:
    links: Optional[GetRecords200ApplicationJSON11Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    ids_not_found: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids_not_found' }})
    items_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items_count' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[shared.ProductConversationsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    received_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    records: Optional[List[shared.CsvConversations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_status: Optional[shared.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_status' }})
    

@dataclass
class GetRecordsResponses:
    get_records_200_application_json_one_of: Optional[Any] = field(default=None)
    get_records_403_application_json_any: Optional[Any] = field(default=None)
    get_records_422_application_json_one_of: Optional[Any] = field(default=None)
    

@dataclass
class GetRecordsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, GetRecordsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
