from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasGraphsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasGraphsUpdateRequest:
    path_params: ExtrasGraphsUpdatePathParams = field()
    request: shared.WritableGraphInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasGraphsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    graph: Optional[shared.Graph] = field(default=None)
    
