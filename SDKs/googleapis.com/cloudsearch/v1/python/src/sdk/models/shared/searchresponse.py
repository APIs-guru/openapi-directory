from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchResponse:
    r"""SearchResponse
    The search API response.
    """
    
    debug_info: Optional[ResponseDebugInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugInfo') }})
    error_info: Optional[ErrorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorInfo') }})
    facet_results: Optional[List[FacetResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facetResults') }})
    has_more_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMoreResults') }})
    query_interpretation: Optional[QueryInterpretation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryInterpretation') }})
    result_count_estimate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultCountEstimate') }})
    result_count_exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultCountExact') }})
    result_counts: Optional[ResultCounts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultCounts') }})
    results: Optional[List[SearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    spell_results: Optional[List[SpellResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spellResults') }})
    structured_results: Optional[List[StructuredResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredResults') }})
    
