from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FitnessUsersSessionsListPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FitnessUsersSessionsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    activity_type: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'activityType', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeleted', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption8:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption9:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption10:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption11:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption12:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption13:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption14:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption15:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption16:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption17:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption18:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption19:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption20:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption21:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurityOption22:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersSessionsListSecurity:
    option1: Optional[FitnessUsersSessionsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option10: Optional[FitnessUsersSessionsListSecurityOption10] = field(default=None, metadata={'security': { 'option': True }})
    option11: Optional[FitnessUsersSessionsListSecurityOption11] = field(default=None, metadata={'security': { 'option': True }})
    option12: Optional[FitnessUsersSessionsListSecurityOption12] = field(default=None, metadata={'security': { 'option': True }})
    option13: Optional[FitnessUsersSessionsListSecurityOption13] = field(default=None, metadata={'security': { 'option': True }})
    option14: Optional[FitnessUsersSessionsListSecurityOption14] = field(default=None, metadata={'security': { 'option': True }})
    option15: Optional[FitnessUsersSessionsListSecurityOption15] = field(default=None, metadata={'security': { 'option': True }})
    option16: Optional[FitnessUsersSessionsListSecurityOption16] = field(default=None, metadata={'security': { 'option': True }})
    option17: Optional[FitnessUsersSessionsListSecurityOption17] = field(default=None, metadata={'security': { 'option': True }})
    option18: Optional[FitnessUsersSessionsListSecurityOption18] = field(default=None, metadata={'security': { 'option': True }})
    option19: Optional[FitnessUsersSessionsListSecurityOption19] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FitnessUsersSessionsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option20: Optional[FitnessUsersSessionsListSecurityOption20] = field(default=None, metadata={'security': { 'option': True }})
    option21: Optional[FitnessUsersSessionsListSecurityOption21] = field(default=None, metadata={'security': { 'option': True }})
    option22: Optional[FitnessUsersSessionsListSecurityOption22] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FitnessUsersSessionsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FitnessUsersSessionsListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FitnessUsersSessionsListSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FitnessUsersSessionsListSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[FitnessUsersSessionsListSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[FitnessUsersSessionsListSecurityOption8] = field(default=None, metadata={'security': { 'option': True }})
    option9: Optional[FitnessUsersSessionsListSecurityOption9] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FitnessUsersSessionsListRequest:
    path_params: FitnessUsersSessionsListPathParams = field()
    query_params: FitnessUsersSessionsListQueryParams = field()
    security: FitnessUsersSessionsListSecurity = field()
    

@dataclass
class FitnessUsersSessionsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_sessions_response: Optional[shared.ListSessionsResponse] = field(default=None)
    
