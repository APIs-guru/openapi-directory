from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any


@dataclass
class PreprintsPartialUpdatePathParams:
    preprint_id: str = field(metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintsPartialUpdateRequest:
    path_params: PreprintsPartialUpdatePathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PreprintsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    
