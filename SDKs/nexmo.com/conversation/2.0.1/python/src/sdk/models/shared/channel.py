from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelFrom1:
    r"""ChannelFrom1
    Connect to an App User
    """
    
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclass
class ChannelFrom2:
    r"""ChannelFrom2
    Connect to a Phone (PSTN) number
    """
    
    number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ChannelFrom3:
    r"""ChannelFrom3
    Connect to a SIP Endpoint
    """
    
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
class ChannelFrom4ContentTypeEnum(str, Enum):
    AUDIO_L16_RATE_EQUAL_8000 = "audio/l16;rate=8000"
    AUDIO_L16_RATE_EQUAL_16000 = "audio/l16;rate=16000"


@dataclass_json
@dataclass
class ChannelFrom4Headers:
    r"""ChannelFrom4Headers
    Details of the Websocket you want to connect to
    """
    
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    

@dataclass_json
@dataclass
class ChannelFrom4:
    r"""ChannelFrom4
    Connect to a Websocket
    """
    
    content_type: ChannelFrom4ContentTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content-type') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    headers: Optional[ChannelFrom4Headers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class ChannelFrom5:
    r"""ChannelFrom5
    Connect to a VBC extension
    """
    
    extension: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ChannelTo2:
    r"""ChannelTo2
    Connect to a Phone (PSTN) number
    """
    
    number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    dtmf_answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dtmfAnswer') }})
    

@dataclass_json
@dataclass
class Channel:
    r"""Channel
    A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
    """
    
    from_: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    leg_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg_id') }})
    leg_ids: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg_ids') }})
    to: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    type: Optional[ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
