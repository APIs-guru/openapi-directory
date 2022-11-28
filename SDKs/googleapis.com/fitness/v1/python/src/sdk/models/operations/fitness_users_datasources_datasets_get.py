from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FitnessUsersDataSourcesDatasetsGetPathParams:
    data_source_id: str = field(metadata={'path_param': { 'field_name': 'dataSourceId', 'style': 'simple', 'explode': False }})
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetQueryParams:
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
class FitnessUsersDataSourcesDatasetsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption8:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption9:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption10:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption11:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption12:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption13:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption14:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption15:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption16:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption17:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption18:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption19:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption20:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption21:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurityOption22:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetSecurity:
    option1: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option10: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption10] = field(default=None, metadata={'security': { 'option': True }})
    option11: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption11] = field(default=None, metadata={'security': { 'option': True }})
    option12: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption12] = field(default=None, metadata={'security': { 'option': True }})
    option13: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption13] = field(default=None, metadata={'security': { 'option': True }})
    option14: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption14] = field(default=None, metadata={'security': { 'option': True }})
    option15: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption15] = field(default=None, metadata={'security': { 'option': True }})
    option16: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption16] = field(default=None, metadata={'security': { 'option': True }})
    option17: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption17] = field(default=None, metadata={'security': { 'option': True }})
    option18: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption18] = field(default=None, metadata={'security': { 'option': True }})
    option19: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption19] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option20: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption20] = field(default=None, metadata={'security': { 'option': True }})
    option21: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption21] = field(default=None, metadata={'security': { 'option': True }})
    option22: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption22] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption8] = field(default=None, metadata={'security': { 'option': True }})
    option9: Optional[FitnessUsersDataSourcesDatasetsGetSecurityOption9] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetRequest:
    path_params: FitnessUsersDataSourcesDatasetsGetPathParams = field()
    query_params: FitnessUsersDataSourcesDatasetsGetQueryParams = field()
    security: FitnessUsersDataSourcesDatasetsGetSecurity = field()
    

@dataclass
class FitnessUsersDataSourcesDatasetsGetResponse:
    content_type: str = field()
    status_code: int = field()
    dataset: Optional[shared.Dataset] = field(default=None)
    
