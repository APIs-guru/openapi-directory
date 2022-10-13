from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetNotificationsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetNotificationsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetNotificationsSecurity:
    option1: Optional[GetNotificationsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetNotificationsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetNotificationsRequest:
    security: GetNotificationsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetNotifications200ApplicationJSON:
    data: Optional[List[shared.Notification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetNotificationsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetNotificationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_notifications_200_application_json_object: Optional[GetNotifications200ApplicationJSON] = field(default=None)
    get_notifications_default_application_json_object: Optional[GetNotificationsDefaultApplicationJSON] = field(default=None)
    
