from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import apidatarow

class SearchAnalyticsQueryResponseResponseAggregationTypeEnum(str, Enum):
    AUTO = "AUTO"
    BY_PROPERTY = "BY_PROPERTY"
    BY_PAGE = "BY_PAGE"


@dataclass_json
@dataclass
class SearchAnalyticsQueryResponse:
    response_aggregation_type: Optional[SearchAnalyticsQueryResponseResponseAggregationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseAggregationType' }})
    rows: Optional[List[apidatarow.APIDataRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
