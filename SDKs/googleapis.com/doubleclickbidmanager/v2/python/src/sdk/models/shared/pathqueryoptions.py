from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import channelgrouping
from . import pathfilter


@dataclass_json
@dataclass
class PathQueryOptions:
    channel_grouping: Optional[channelgrouping.ChannelGrouping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelGrouping' }})
    path_filters: Optional[List[pathfilter.PathFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathFilters' }})
    
