from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIUsageHistorySecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class APIUsageHistoryRequest:
    security: APIUsageHistorySecurity = field(default=None)
    

@dataclass
class APIUsageHistoryResponse:
    api_usage_history_out: Optional[shared.APIUsageHistoryOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
