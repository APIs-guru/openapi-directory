from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNotificationsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNotificationsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNotificationsRequest:
    path_params: GetNotificationsPathParams = field()
    security: GetNotificationsSecurity = field()
    

@dataclass
class GetNotificationsResponse:
    content_type: str = field()
    status_code: int = field()
    notification_result_dto: Optional[shared.NotificationResultDto] = field(default=None)
    
