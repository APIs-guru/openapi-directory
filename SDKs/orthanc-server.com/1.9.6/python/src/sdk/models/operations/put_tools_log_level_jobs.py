from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutToolsLogLevelJobsRequest:
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PutToolsLogLevelJobsResponse:
    content_type: str = field()
    status_code: int = field()
    
