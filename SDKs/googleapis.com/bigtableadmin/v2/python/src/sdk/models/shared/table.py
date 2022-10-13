from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import clusterstate
from . import columnfamily
from . import restoreinfo

class TableGranularityEnum(str, Enum):
    TIMESTAMP_GRANULARITY_UNSPECIFIED = "TIMESTAMP_GRANULARITY_UNSPECIFIED"
    MILLIS = "MILLIS"


@dataclass_json
@dataclass
class Table:
    cluster_states: Optional[dict[str, clusterstate.ClusterState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterStates' }})
    column_families: Optional[dict[str, columnfamily.ColumnFamily]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnFamilies' }})
    granularity: Optional[TableGranularityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'granularity' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    restore_info: Optional[restoreinfo.RestoreInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreInfo' }})
    
