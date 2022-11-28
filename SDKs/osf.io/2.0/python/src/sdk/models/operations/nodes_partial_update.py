from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any


@dataclass
class NodesPartialUpdatePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesPartialUpdateRequest:
    path_params: NodesPartialUpdatePathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    
