from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Page:
    r"""Page
    Represents a documentation page. A page can contain subpages to represent nested documentation set structure.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    subpages: Optional[List[Page]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subpages') }})
    
