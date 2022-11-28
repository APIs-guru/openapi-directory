from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasConfigContextsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasConfigContextsUpdateRequest:
    path_params: ExtrasConfigContextsUpdatePathParams = field()
    request: shared.WritableConfigContextInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasConfigContextsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    config_context: Optional[shared.ConfigContext] = field(default=None)
    
