from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostMappingRequest:
    request: Optional[List[shared.MappingJob]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMappingResponse:
    body: bytes = field(default=None)
    bulk_mapping_job_result: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
