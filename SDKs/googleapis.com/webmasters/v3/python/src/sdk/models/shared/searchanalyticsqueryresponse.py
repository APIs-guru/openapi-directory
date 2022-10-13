from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apidatarow


@dataclass_json
@dataclass
class SearchAnalyticsQueryResponse:
    response_aggregation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseAggregationType' }})
    rows: Optional[List[apidatarow.APIDataRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
