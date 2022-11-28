from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NamedRanges:
    r"""NamedRanges
    A collection of all the NamedRanges in the document that share a given name.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    named_ranges: Optional[List[NamedRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRanges') }})
    
