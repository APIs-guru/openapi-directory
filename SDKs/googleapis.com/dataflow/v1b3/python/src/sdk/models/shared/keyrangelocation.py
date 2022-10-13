from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyRangeLocation:
    data_disk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataDisk' }})
    delivery_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryEndpoint' }})
    deprecated_persistent_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecatedPersistentDirectory' }})
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
