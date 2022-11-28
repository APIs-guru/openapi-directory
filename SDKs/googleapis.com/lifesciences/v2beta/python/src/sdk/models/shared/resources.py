from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Resources:
    r"""Resources
    The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.
    """
    
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    virtual_machine: Optional[VirtualMachine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachine') }})
    zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    
