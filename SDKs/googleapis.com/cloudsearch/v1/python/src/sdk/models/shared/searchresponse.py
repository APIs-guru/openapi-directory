from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responsedebuginfo
from . import errorinfo
from . import facetresult
from . import queryinterpretation
from . import resultcounts
from . import searchresult
from . import spellresult
from . import structuredresult


@dataclass_json
@dataclass
class SearchResponse:
    debug_info: Optional[responsedebuginfo.ResponseDebugInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugInfo' }})
    error_info: Optional[errorinfo.ErrorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorInfo' }})
    facet_results: Optional[List[facetresult.FacetResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facetResults' }})
    has_more_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasMoreResults' }})
    query_interpretation: Optional[queryinterpretation.QueryInterpretation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryInterpretation' }})
    result_count_estimate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultCountEstimate' }})
    result_count_exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultCountExact' }})
    result_counts: Optional[resultcounts.ResultCounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultCounts' }})
    results: Optional[List[searchresult.SearchResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    spell_results: Optional[List[spellresult.SpellResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spellResults' }})
    structured_results: Optional[List[structuredresult.StructuredResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredResults' }})
    
