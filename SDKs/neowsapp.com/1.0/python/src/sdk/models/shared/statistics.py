from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import url


@dataclass_json
@dataclass
class Statistics:
    close_approach_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'close_approach_count' }})
    last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated' }})
    nasa_jpl_url: Optional[url.URL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nasa_jpl_url' }})
    near_earth_object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'near_earth_object_count' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
