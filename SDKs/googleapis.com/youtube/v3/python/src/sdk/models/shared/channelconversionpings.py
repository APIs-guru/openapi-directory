from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import channelconversionping


@dataclass_json
@dataclass
class ChannelConversionPings:
    pings: Optional[List[channelconversionping.ChannelConversionPing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pings' }})
    
