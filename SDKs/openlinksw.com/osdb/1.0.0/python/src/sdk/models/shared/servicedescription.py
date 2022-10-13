from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceDescription:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    import_source_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'import_source_uri' }})
    service_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_id' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_name' }})
    
