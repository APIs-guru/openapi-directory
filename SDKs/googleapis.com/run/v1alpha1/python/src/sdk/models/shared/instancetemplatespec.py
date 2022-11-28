from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceTemplateSpec:
    r"""InstanceTemplateSpec
    InstanceTemplateSpec describes the data an instance should have when created from a template.
    """
    
    spec: Optional[InstanceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
