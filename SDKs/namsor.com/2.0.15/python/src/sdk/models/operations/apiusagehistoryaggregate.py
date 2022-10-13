from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIUsageHistoryAggregateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class APIUsageHistoryAggregateRequest:
    security: APIUsageHistoryAggregateSecurity = field(default=None)
    

@dataclass
class APIUsageHistoryAggregateResponse:
    api_usage_aggregated_out: Optional[shared.APIUsageAggregatedOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
