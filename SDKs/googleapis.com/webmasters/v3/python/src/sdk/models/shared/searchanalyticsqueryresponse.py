from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchAnalyticsQueryResponse:
    r"""SearchAnalyticsQueryResponse
    A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
    """
    
    response_aggregation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseAggregationType') }})
    rows: Optional[List[APIDataRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
