from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIUsageSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class APIUsageRequest:
    security: APIUsageSecurity = field()
    

@dataclass
class APIUsageResponse:
    content_type: str = field()
    status_code: int = field()
    api_period_usage_out: Optional[shared.APIPeriodUsageOut] = field(default=None)
    
