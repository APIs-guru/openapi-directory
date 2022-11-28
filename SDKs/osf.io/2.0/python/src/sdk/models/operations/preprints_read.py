from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PreprintsReadPathParams:
    preprint_id: str = field(metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintsReadRequest:
    path_params: PreprintsReadPathParams = field()
    

@dataclass
class PreprintsReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
