from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NamedRange:
    r"""NamedRange
    A collection of Ranges with the same named range ID. Named ranges allow developers to associate parts of a document with an arbitrary user-defined label so their contents can be programmatically read or edited later. A document can contain multiple named ranges with the same name, but every named range has a unique ID. A named range is created with a single Range, and content inserted inside a named range generally expands that range. However, certain document changes can cause the range to be split into multiple ranges. Named ranges are not private. All applications and collaborators that have access to the document can see its named ranges.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    named_range_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRangeId') }})
    ranges: Optional[List[Range]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranges') }})
    
