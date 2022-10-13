from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import versioninfo


@dataclass_json
@dataclass
class PackageInfo:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guid' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overview' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    versions: Optional[List[versioninfo.VersionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
