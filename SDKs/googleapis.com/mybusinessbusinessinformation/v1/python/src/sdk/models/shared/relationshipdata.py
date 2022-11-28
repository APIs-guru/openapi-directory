from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RelationshipData:
    r"""RelationshipData
    Information of all parent and children locations related to this one.
    """
    
    children_locations: Optional[List[RelevantLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childrenLocations') }})
    parent_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentChain') }})
    parent_location: Optional[RelevantLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLocation') }})
    
