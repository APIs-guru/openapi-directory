from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasConfigContextsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasConfigContextsPartialUpdateRequest:
    path_params: ExtrasConfigContextsPartialUpdatePathParams = field()
    request: shared.WritableConfigContextInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasConfigContextsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    config_context: Optional[shared.ConfigContext] = field(default=None)
    
