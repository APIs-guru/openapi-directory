from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasGraphsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasGraphsPartialUpdateRequest:
    path_params: ExtrasGraphsPartialUpdatePathParams = field()
    request: shared.GraphInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasGraphsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    graph: Optional[shared.Graph] = field(default=None)
    
