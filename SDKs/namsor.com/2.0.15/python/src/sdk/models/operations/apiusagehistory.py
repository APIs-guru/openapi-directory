from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIUsageHistorySecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class APIUsageHistoryRequest:
    security: APIUsageHistorySecurity = field()
    

@dataclass
class APIUsageHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    api_usage_history_out: Optional[shared.APIUsageHistoryOut] = field(default=None)
    
