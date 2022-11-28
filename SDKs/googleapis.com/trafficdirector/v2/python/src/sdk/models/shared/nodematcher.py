from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodeMatcher:
    r"""NodeMatcher
    Specifies the way to match a Node. The match follows AND semantics.
    """
    
    node_id: Optional[StringMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeId') }})
    node_metadatas: Optional[List[StructMatcher]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeMetadatas') }})
    
