from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class CreateAdminNotificationQueryParams:
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    level: Optional[shared.NotificationLevelEnum] = field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateAdminNotificationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateAdminNotificationRequest:
    query_params: CreateAdminNotificationQueryParams = field(default=None)
    security: CreateAdminNotificationSecurity = field(default=None)
    

@dataclass
class CreateAdminNotificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
