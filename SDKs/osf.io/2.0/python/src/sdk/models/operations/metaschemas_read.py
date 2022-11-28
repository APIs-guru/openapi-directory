from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MetaschemasReadPathParams:
    metaschema_id: str = field(metadata={'path_param': { 'field_name': 'metaschema_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MetaschemasReadRequest:
    path_params: MetaschemasReadPathParams = field()
    

@dataclass
class MetaschemasReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
