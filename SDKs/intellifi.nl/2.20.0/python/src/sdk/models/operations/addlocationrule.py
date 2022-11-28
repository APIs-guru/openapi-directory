from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class AddLocationRuleRequest:
    request: shared.LocationRuleUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddLocationRuleResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
