from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import command


@dataclass_json
@dataclass
class Contact:
    accept_commands: Optional[List[command.Command]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptCommands' }})
    accept_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptTypes' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrls' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    sharing_features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharingFeatures' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    speakable_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speakableName' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
