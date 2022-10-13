from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DirectoryListItemsIcons:
    x16: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x16' }})
    x32: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x32' }})
    

@dataclass_json
@dataclass
class DirectoryListItems:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    discovery_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoveryLink' }})
    discovery_rest_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoveryRestUrl' }})
    documentation_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentationLink' }})
    icons: Optional[DirectoryListItemsIcons] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icons' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class DirectoryList:
    discovery_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoveryVersion' }})
    items: Optional[List[DirectoryListItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
