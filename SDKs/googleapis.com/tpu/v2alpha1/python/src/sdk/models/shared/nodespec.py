from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodeSpecInput:
    r"""NodeSpecInput
    Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
    """
    
    node: Optional[NodeInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeId') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    

@dataclass_json
@dataclass
class NodeSpec:
    r"""NodeSpec
    Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
    """
    
    node: Optional[Node] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeId') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
