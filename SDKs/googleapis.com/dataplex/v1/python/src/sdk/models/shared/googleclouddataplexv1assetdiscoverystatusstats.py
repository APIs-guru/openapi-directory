from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetDiscoveryStatusStats:
    data_items: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataItems' }})
    data_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSize' }})
    filesets: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesets' }})
    tables: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tables' }})
    
