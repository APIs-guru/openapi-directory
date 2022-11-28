from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSpotPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSpotRequest:
    path_params: UpdateSpotPathParams = field()
    request: shared.SpotUpdateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSpotResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
