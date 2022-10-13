from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUsersUserEmailProgressPathParams:
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserEmailProgressRequest:
    path_params: GetUsersUserEmailProgressPathParams = field(default=None)
    

@dataclass
class GetUsersUserEmailProgressResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    learner_response: Optional[shared.LearnerResponse] = field(default=None)
    status_code: int = field(default=None)
    
