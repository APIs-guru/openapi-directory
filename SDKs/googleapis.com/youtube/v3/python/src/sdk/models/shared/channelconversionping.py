from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChannelConversionPingContextEnum(str, Enum):
    SUBSCRIBE = "subscribe"
    UNSUBSCRIBE = "unsubscribe"
    CVIEW = "cview"


@dataclass_json
@dataclass
class ChannelConversionPing:
    r"""ChannelConversionPing
    Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
    """
    
    context: Optional[ChannelConversionPingContextEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    conversion_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionUrl') }})
    
