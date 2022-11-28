from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutToolsLogLevelGenericRequest:
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PutToolsLogLevelGenericResponse:
    content_type: str = field()
    status_code: int = field()
    
