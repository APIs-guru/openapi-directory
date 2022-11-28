from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErskineMaySearchErskineMayParagraphSearchResult:
    search_results: Optional[List[ErskineMayParagraphSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchResults') }})
    search_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchTerm') }})
    search_terms: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchTerms') }})
    skip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip') }})
    suggested_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedSearch') }})
    take: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('take') }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
