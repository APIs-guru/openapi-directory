from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErskineMayIndexTerm:
    child_terms: Optional[List[ErskineMayIndexTerm]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childTerms') }})
    display_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayAs') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    parent_term: Optional[ErskineMayIndexTerm] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentTerm') }})
    references: Optional[List[ErskineMayParagraphSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    see_links: Optional[List[ErskineMayIndexTermSeeLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seeLinks') }})
    term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('term') }})
    
