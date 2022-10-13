from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Ownednumber:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    messages_callback_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messagesCallbackType' }})
    messages_callback_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messagesCallbackValue' }})
    mo_http_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moHttpUrl' }})
    msisdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msisdn' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    voice_callback_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceCallbackType' }})
    voice_callback_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceCallbackValue' }})
    
