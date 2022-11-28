from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentInput:
    r"""EnvironmentInput
    Definition of a software environment that is used to start a notebook instance.
    """
    
    container_image: Optional[ContainerImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    post_startup_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStartupScript') }})
    vm_image: Optional[VMImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmImage') }})
    

@dataclass_json
@dataclass
class Environment:
    r"""Environment
    Definition of a software environment that is used to start a notebook instance.
    """
    
    container_image: Optional[ContainerImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    post_startup_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStartupScript') }})
    vm_image: Optional[VMImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmImage') }})
    
