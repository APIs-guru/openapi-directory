from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contextattribute
from . import datasourcerestriction
from . import facetoptions
from . import queryinterpretationoptions
from . import requestoptions
from . import sortoptions


@dataclass_json
@dataclass
class SearchRequest:
    context_attributes: Optional[List[contextattribute.ContextAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextAttributes' }})
    data_source_restrictions: Optional[List[datasourcerestriction.DataSourceRestriction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceRestrictions' }})
    facet_options: Optional[List[facetoptions.FacetOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facetOptions' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    query_interpretation_options: Optional[queryinterpretationoptions.QueryInterpretationOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryInterpretationOptions' }})
    request_options: Optional[requestoptions.RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestOptions' }})
    sort_options: Optional[sortoptions.SortOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOptions' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
