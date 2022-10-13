from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class PostAppsAppIDVersionsVersionStatusPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    version: int = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    
class PostAppsAppIDVersionsVersionStatusModifiedByEnum(str, Enum):
    DEVELOPER = "developer"
    ADMINISTRATOR = "administrator"

class PostAppsAppIDVersionsVersionStatusStatusEnum(str, Enum):
    IN_REVIEW = "inReview"
    APPROVED = "approved"
    SUSPENDED = "suspended"
    REJECTED = "rejected"


@dataclass
class PostAppsAppIDVersionsVersionStatusQueryParams:
    developer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    modified_by: Optional[PostAppsAppIDVersionsVersionStatusModifiedByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'modifiedBy', 'style': 'form', 'explode': True }})
    reason: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    status: Optional[PostAppsAppIDVersionsVersionStatusStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAppsAppIDVersionsVersionStatusRequest:
    path_params: PostAppsAppIDVersionsVersionStatusPathParams = field(default=None)
    query_params: PostAppsAppIDVersionsVersionStatusQueryParams = field(default=None)
    

@dataclass
class PostAppsAppIDVersionsVersionStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
