from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenerateSSHScriptRequest:
    r"""GenerateSSHScriptRequest
    Request message for 'GenerateSshScript' request.
    """
    
    vm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm') }})
    vm_creation_config: Optional[VMCreationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmCreationConfig') }})
    vm_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmPort') }})
    vm_selection_config: Optional[VMSelectionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmSelectionConfig') }})
    
