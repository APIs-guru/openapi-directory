from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TableGranularityEnum(str, Enum):
    TIMESTAMP_GRANULARITY_UNSPECIFIED = "TIMESTAMP_GRANULARITY_UNSPECIFIED"
    MILLIS = "MILLIS"


@dataclass_json
@dataclass
class Table:
    r"""Table
    A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
    """
    
    cluster_states: Optional[dict[str, ClusterState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterStates') }})
    column_families: Optional[dict[str, ColumnFamily]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnFamilies') }})
    deletion_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletionProtection') }})
    granularity: Optional[TableGranularityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('granularity') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    restore_info: Optional[RestoreInfo1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreInfo') }})
    stats: Optional[TableStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    

@dataclass_json
@dataclass
class TableInput:
    r"""TableInput
    A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
    """
    
    column_families: Optional[dict[str, ColumnFamily]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnFamilies') }})
    deletion_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletionProtection') }})
    granularity: Optional[TableGranularityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('granularity') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    restore_info: Optional[RestoreInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreInfo') }})
    stats: Optional[TableStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
