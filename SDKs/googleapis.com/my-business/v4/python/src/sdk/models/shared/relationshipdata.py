from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RelationshipData:
    r"""RelationshipData
    Information of all parent and children locations related to this one.
    """
    
    parent_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentChain') }})
    
