from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateEventNotificationHeaders:
    x_fapi_financial_id: str = field(default=None, metadata={'header': { 'field_name': 'x-fapi-financial-id', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEventNotificationRequest:
    headers: CreateEventNotificationHeaders = field(default=None)
    request: str = field(default=None, metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass
class CreateEventNotificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
