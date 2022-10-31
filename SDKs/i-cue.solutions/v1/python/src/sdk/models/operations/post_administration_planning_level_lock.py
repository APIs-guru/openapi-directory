from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostAdministrationPlanningLevelLockHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAdministrationPlanningLevelLockRequest:
    headers: PostAdministrationPlanningLevelLockHeaders = field(default=None)
    

@dataclass
class PostAdministrationPlanningLevelLockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
