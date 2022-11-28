from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostLifecycleOneToOneHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostLifecycleOneToOneRequests:
    lifecycle_one_to_one_request: Optional[shared.LifecycleOneToOneRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    lifecycle_one_to_one_request1: Optional[shared.LifecycleOneToOneRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    lifecycle_one_to_one_request2: Optional[shared.LifecycleOneToOneRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostLifecycleOneToOneRequest:
    headers: PostLifecycleOneToOneHeaders = field()
    request: Optional[PostLifecycleOneToOneRequests] = field(default=None)
    

@dataclass
class PostLifecycleOneToOneResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    planning_level_data_dto: Optional[shared.PlanningLevelDataDto] = field(default=None)
    
