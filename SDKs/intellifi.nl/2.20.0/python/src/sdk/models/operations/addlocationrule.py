from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddLocationRuleRequest:
    request: shared.LocationRuleUpdate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddLocationRuleResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
