from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Application:
    details_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailsUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
