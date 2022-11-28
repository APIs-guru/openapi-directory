from dataclasses import dataclass, field
from typing import Any


@dataclass
class VoiceConversionQueryParams:
    delivered: Any = field(metadata={'query_param': { 'field_name': 'delivered', 'style': 'form', 'explode': True }})
    message_id: str = field(metadata={'query_param': { 'field_name': 'message-id', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class VoiceConversionRequest:
    query_params: VoiceConversionQueryParams = field()
    

@dataclass
class VoiceConversionResponse:
    content_type: str = field()
    status_code: int = field()
    
