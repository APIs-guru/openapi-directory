from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Category:
    resource_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceFamily' }})
    resource_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceGroup' }})
    service_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDisplayName' }})
    usage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageType' }})
    
