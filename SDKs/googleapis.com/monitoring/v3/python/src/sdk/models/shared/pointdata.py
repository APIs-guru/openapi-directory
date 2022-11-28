from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PointData:
    r"""PointData
    A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object.
    """
    
    time_interval: Optional[TimeInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeInterval') }})
    values: Optional[List[TypedValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
