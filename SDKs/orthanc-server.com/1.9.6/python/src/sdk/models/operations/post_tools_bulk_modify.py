from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostToolsBulkModifyRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostToolsBulkModifyResponse:
    content_type: str = field(default=None)
    post_tools_bulk_modify_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
