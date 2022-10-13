from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNotificationTypesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNotificationTypesRequest:
    security: GetNotificationTypesSecurity = field(default=None)
    

@dataclass
class GetNotificationTypesResponse:
    content_type: str = field(default=None)
    notification_type_infos: Optional[List[shared.NotificationTypeInfo]] = field(default=None)
    status_code: int = field(default=None)
    
