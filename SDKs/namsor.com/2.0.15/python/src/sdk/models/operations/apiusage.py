from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIUsageSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class APIUsageRequest:
    security: APIUsageSecurity = field(default=None)
    

@dataclass
class APIUsageResponse:
    api_period_usage_out: Optional[shared.APIPeriodUsageOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
