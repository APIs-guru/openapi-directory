from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchRequest:
    r"""SearchRequest
    The search API request.
    """
    
    context_attributes: Optional[List[ContextAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextAttributes') }})
    data_source_restrictions: Optional[List[DataSourceRestriction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceRestrictions') }})
    facet_options: Optional[List[FacetOptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facetOptions') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    query_interpretation_options: Optional[QueryInterpretationOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryInterpretationOptions') }})
    request_options: Optional[RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestOptions') }})
    sort_options: Optional[SortOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOptions') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
