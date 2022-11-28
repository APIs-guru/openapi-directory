from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Dataset:
    r"""Dataset
    A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset.
    """
    
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    max_end_time_ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEndTimeNs') }})
    min_start_time_ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minStartTimeNs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    point: Optional[List[DataPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('point') }})
    
