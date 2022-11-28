from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostToolsBulkAnonymizeRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostToolsBulkAnonymizeResponse:
    content_type: str = field()
    status_code: int = field()
    post_tools_bulk_anonymize_200_application_json_any: Optional[Any] = field(default=None)
    
