from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerimage
from . import vmimage


@dataclass_json
@dataclass
class Environment:
    container_image: Optional[containerimage.ContainerImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImage' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    post_startup_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postStartupScript' }})
    vm_image: Optional[vmimage.VMImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmImage' }})
    
