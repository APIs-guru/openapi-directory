from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostLifecycleManyToOneHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostLifecycleManyToOneRequests:
    lifecycle_many_to_one_request: Optional[shared.LifecycleManyToOneRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    lifecycle_many_to_one_request1: Optional[shared.LifecycleManyToOneRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    lifecycle_many_to_one_request2: Optional[shared.LifecycleManyToOneRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostLifecycleManyToOneRequest:
    headers: PostLifecycleManyToOneHeaders = field()
    request: Optional[PostLifecycleManyToOneRequests] = field(default=None)
    

@dataclass
class PostLifecycleManyToOneResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    planning_level_data_dto: Optional[shared.PlanningLevelDataDto] = field(default=None)
    
