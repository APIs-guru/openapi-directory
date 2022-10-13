from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DefaultResources:
    hosting_site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostingSite' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    realtime_database_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realtimeDatabaseInstance' }})
    storage_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageBucket' }})
    
