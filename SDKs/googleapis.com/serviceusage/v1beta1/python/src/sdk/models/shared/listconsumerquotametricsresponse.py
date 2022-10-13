from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consumerquotametric


@dataclass_json
@dataclass
class ListConsumerQuotaMetricsResponse:
    metrics: Optional[List[consumerquotametric.ConsumerQuotaMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
