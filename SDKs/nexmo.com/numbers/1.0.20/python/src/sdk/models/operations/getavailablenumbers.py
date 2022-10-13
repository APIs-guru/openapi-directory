from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetAvailableNumbersFeaturesEnum(str, Enum):
    SMS = "SMS"
    VOICE = "VOICE"
    SMS_VOICE = "SMS,VOICE"
    MMS = "MMS"
    SMS_MMS = "SMS,MMS"
    VOICE_MMS = "VOICE,MMS"
    SMS_MMS_VOICE = "SMS,MMS,VOICE"


@dataclass
class GetAvailableNumbersQueryParams:
    country: str = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    features: Optional[GetAvailableNumbersFeaturesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'features', 'style': 'form', 'explode': True }})
    index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'index', 'style': 'form', 'explode': True }})
    pattern: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pattern', 'style': 'form', 'explode': True }})
    search_pattern: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'search_pattern', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    type: Optional[shared.TypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAvailableNumbersRequest:
    query_params: GetAvailableNumbersQueryParams = field(default=None)
    

@dataclass
class GetAvailableNumbersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    account_unauthorized: Optional[shared.AccountUnauthorized] = field(default=None)
    available_numbers: Optional[shared.AvailableNumbers] = field(default=None)
    
