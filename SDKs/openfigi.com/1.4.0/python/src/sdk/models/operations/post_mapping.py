from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostMappingRequest:
    request: Optional[List[shared.MappingJob]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMappingResponse:
    content_type: str = field()
    status_code: int = field()
    bulk_mapping_job_result: Optional[List[Any]] = field(default=None)
    post_mapping_400_wildcard_string: Optional[str] = field(default=None)
    post_mapping_401_wildcard_string: Optional[str] = field(default=None)
    post_mapping_406_wildcard_string: Optional[str] = field(default=None)
    post_mapping_413_wildcard_string: Optional[str] = field(default=None)
    post_mapping_500_wildcard_string: Optional[str] = field(default=None)
    
