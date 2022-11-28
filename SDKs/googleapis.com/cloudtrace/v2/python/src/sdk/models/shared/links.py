from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Links:
    r"""Links
    A collection of links, which are references from this span to a span in the same or different trace.
    """
    
    dropped_links_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedLinksCount') }})
    link: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
