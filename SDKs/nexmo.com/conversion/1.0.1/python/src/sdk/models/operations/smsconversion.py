from dataclasses import dataclass, field
from typing import Any


@dataclass
class SmsConversionQueryParams:
    delivered: Any = field(metadata={'query_param': { 'field_name': 'delivered', 'style': 'form', 'explode': True }})
    message_id: str = field(metadata={'query_param': { 'field_name': 'message-id', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class SmsConversionRequest:
    query_params: SmsConversionQueryParams = field()
    

@dataclass
class SmsConversionResponse:
    content_type: str = field()
    status_code: int = field()
    
