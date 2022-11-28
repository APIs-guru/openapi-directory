from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PathQueryOptions:
    r"""PathQueryOptions
    Path Query Options for Report Options.
    """
    
    channel_grouping: Optional[ChannelGrouping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelGrouping') }})
    path_filters: Optional[List[PathFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathFilters') }})
    
