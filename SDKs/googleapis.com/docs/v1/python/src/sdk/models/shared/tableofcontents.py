from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableOfContents:
    r"""TableOfContents
    A StructuralElement representing a table of contents.
    """
    
    content: Optional[List[StructuralElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionIds') }})
    
