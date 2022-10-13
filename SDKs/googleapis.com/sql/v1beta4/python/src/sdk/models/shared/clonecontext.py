from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import binlogcoordinates


@dataclass_json
@dataclass
class CloneContext:
    allocated_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocatedIpRange' }})
    bin_log_coordinates: Optional[binlogcoordinates.BinLogCoordinates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binLogCoordinates' }})
    database_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseNames' }})
    destination_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationInstanceName' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    pitr_timestamp_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitrTimestampMs' }})
    point_in_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointInTime' }})
    
