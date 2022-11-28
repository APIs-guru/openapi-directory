from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CreateAdminNotificationQueryParams:
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    level: Optional[shared.NotificationLevelEnum] = field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateAdminNotificationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateAdminNotificationRequest:
    query_params: CreateAdminNotificationQueryParams = field()
    security: CreateAdminNotificationSecurity = field()
    

@dataclass
class CreateAdminNotificationResponse:
    content_type: str = field()
    status_code: int = field()
    
