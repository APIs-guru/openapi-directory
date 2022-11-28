from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChildLink:
    r"""ChildLink
    Metadata associated with a parent-child relationship appearing in a PlanNode.
    """
    
    child_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childIndex') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    variable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variable') }})
    
