from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TpuInput:
    r"""TpuInput
    Details of the TPU resource(s) being requested.
    """
    
    node_spec: Optional[List[NodeSpecInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeSpec') }})
    

@dataclass_json
@dataclass
class Tpu:
    r"""Tpu
    Details of the TPU resource(s) being requested.
    """
    
    node_spec: Optional[List[NodeSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeSpec') }})
    
