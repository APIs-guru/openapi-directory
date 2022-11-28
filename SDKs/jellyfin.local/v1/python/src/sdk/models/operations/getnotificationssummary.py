from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNotificationsSummaryPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNotificationsSummarySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNotificationsSummaryRequest:
    path_params: GetNotificationsSummaryPathParams = field()
    security: GetNotificationsSummarySecurity = field()
    

@dataclass
class GetNotificationsSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    notifications_summary_dto: Optional[shared.NotificationsSummaryDto] = field(default=None)
    
