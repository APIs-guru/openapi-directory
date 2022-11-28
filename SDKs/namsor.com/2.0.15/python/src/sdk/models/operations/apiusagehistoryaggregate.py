from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIUsageHistoryAggregateSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class APIUsageHistoryAggregateRequest:
    security: APIUsageHistoryAggregateSecurity = field()
    

@dataclass
class APIUsageHistoryAggregateResponse:
    content_type: str = field()
    status_code: int = field()
    api_usage_aggregated_out: Optional[shared.APIUsageAggregatedOut] = field(default=None)
    
