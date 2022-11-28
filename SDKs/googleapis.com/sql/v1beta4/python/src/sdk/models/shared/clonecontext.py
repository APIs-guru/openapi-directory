from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloneContext:
    r"""CloneContext
    Database instance clone context.
    """
    
    allocated_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocatedIpRange') }})
    bin_log_coordinates: Optional[BinLogCoordinates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binLogCoordinates') }})
    database_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseNames') }})
    destination_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationInstanceName') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pitr_timestamp_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitrTimestampMs') }})
    point_in_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointInTime') }})
    
