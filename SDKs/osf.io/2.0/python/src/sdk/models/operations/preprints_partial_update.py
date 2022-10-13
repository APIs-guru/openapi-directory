from dataclasses import dataclass, field
from typing import Any


@dataclass
class PreprintsPartialUpdatePathParams:
    preprint_id: str = field(default=None, metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintsPartialUpdateRequest:
    path_params: PreprintsPartialUpdatePathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PreprintsPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
