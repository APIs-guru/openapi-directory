from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutToolsLogLevelSqliteRequest:
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PutToolsLogLevelSqliteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
