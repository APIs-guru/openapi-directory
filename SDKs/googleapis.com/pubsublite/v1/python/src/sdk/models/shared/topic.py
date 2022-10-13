from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import partitionconfig
from . import reservationconfig
from . import retentionconfig


@dataclass_json
@dataclass
class Topic:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    partition_config: Optional[partitionconfig.PartitionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionConfig' }})
    reservation_config: Optional[reservationconfig.ReservationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservationConfig' }})
    retention_config: Optional[retentionconfig.RetentionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionConfig' }})
    
