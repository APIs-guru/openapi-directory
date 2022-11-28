from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComponentTypeRepresentation:
    help_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpText') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    properties: Optional[List[ConfigPropertyRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
