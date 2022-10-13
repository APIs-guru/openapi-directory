from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryFinancialImapctForecastAccuracyHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostInventoryFinancialImapctForecastAccuracyRequest:
    headers: PostInventoryFinancialImapctForecastAccuracyHeaders = field(default=None)
    

@dataclass
class PostInventoryFinancialImapctForecastAccuracyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
