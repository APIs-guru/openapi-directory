from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FitnessUsersDataSourcesDataPointChangesListPathParams:
    data_source_id: str = field(metadata={'path_param': { 'field_name': 'dataSourceId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption8:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption9:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption10:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption11:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption12:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption13:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption14:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption15:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption16:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption17:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption18:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption19:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption20:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption21:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurityOption22:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListSecurity:
    option1: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option10: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption10] = field(default=None, metadata={'security': { 'option': True }})
    option11: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption11] = field(default=None, metadata={'security': { 'option': True }})
    option12: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption12] = field(default=None, metadata={'security': { 'option': True }})
    option13: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption13] = field(default=None, metadata={'security': { 'option': True }})
    option14: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption14] = field(default=None, metadata={'security': { 'option': True }})
    option15: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption15] = field(default=None, metadata={'security': { 'option': True }})
    option16: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption16] = field(default=None, metadata={'security': { 'option': True }})
    option17: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption17] = field(default=None, metadata={'security': { 'option': True }})
    option18: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption18] = field(default=None, metadata={'security': { 'option': True }})
    option19: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption19] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option20: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption20] = field(default=None, metadata={'security': { 'option': True }})
    option21: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption21] = field(default=None, metadata={'security': { 'option': True }})
    option22: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption22] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption8] = field(default=None, metadata={'security': { 'option': True }})
    option9: Optional[FitnessUsersDataSourcesDataPointChangesListSecurityOption9] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListRequest:
    path_params: FitnessUsersDataSourcesDataPointChangesListPathParams = field()
    query_params: FitnessUsersDataSourcesDataPointChangesListQueryParams = field()
    security: FitnessUsersDataSourcesDataPointChangesListSecurity = field()
    

@dataclass
class FitnessUsersDataSourcesDataPointChangesListResponse:
    content_type: str = field()
    status_code: int = field()
    list_data_point_changes_response: Optional[shared.ListDataPointChangesResponse] = field(default=None)
    
