from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChannelGroup:
    auto_assign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoAssign' }})
    

@dataclass_json
@dataclass
class Channel:
    group: Optional[ChannelGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    group_discussion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupDiscussion' }})
    is_broadcast_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBroadcastOnly' }})
    private_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateSupport' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
