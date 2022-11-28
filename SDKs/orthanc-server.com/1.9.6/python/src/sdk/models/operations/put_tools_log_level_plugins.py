from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutToolsLogLevelPluginsRequest:
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PutToolsLogLevelPluginsResponse:
    content_type: str = field()
    status_code: int = field()
    
