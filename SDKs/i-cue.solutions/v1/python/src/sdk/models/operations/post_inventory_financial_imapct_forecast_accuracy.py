from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryFinancialImapctForecastAccuracyHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryFinancialImapctForecastAccuracyRequest:
    headers: PostInventoryFinancialImapctForecastAccuracyHeaders = field()
    

@dataclass
class PostInventoryFinancialImapctForecastAccuracyResponse:
    content_type: str = field()
    status_code: int = field()
    
