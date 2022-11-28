from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetToolsGenerateUIDQueryParams:
    level: str = field(metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    

@dataclass
class GetToolsGenerateUIDRequest:
    query_params: GetToolsGenerateUIDQueryParams = field()
    

@dataclass
class GetToolsGenerateUIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
