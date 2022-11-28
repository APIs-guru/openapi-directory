from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PathReportCompatibleFields:
    r"""PathReportCompatibleFields
    Represents fields that are compatible to be selected for a report of type \"PATH\".
    """
    
    channel_groupings: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelGroupings') }})
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    path_filters: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathFilters') }})
    
