from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import zero
from . import two
from . import three
from . import four
from . import channel_type_enum


@dataclass_json
@dataclass
class ChannelFrom1:
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class ChannelFrom2:
    number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ChannelFrom3:
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
class ChannelFrom4ContentTypeEnum(str, Enum):
    AUDIO_L16_RATE_EQUAL_8000 = "audio/l16;rate=8000"
    AUDIO_L16_RATE_EQUAL_16000 = "audio/l16;rate=16000"


@dataclass_json
@dataclass
class ChannelFrom4Headers:
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    

@dataclass_json
@dataclass
class ChannelFrom4:
    content_type: ChannelFrom4ContentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content-type' }})
    headers: Optional[ChannelFrom4Headers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class ChannelFrom5:
    extension: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ChannelTo2:
    dtmf_answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dtmfAnswer' }})
    number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Channel:
    from_: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    leg_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leg_id' }})
    leg_ids: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leg_ids' }})
    to: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: Optional[channel_type_enum.ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
