from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSubscriptionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSubscriptionRequest:
    path_params: UpdateSubscriptionPathParams = field()
    request: shared.SubscriptionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
