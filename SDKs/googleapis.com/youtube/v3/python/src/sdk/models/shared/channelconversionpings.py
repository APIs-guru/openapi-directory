from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelConversionPings:
    r"""ChannelConversionPings
    The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
    """
    
    pings: Optional[List[ChannelConversionPing]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pings') }})
    
