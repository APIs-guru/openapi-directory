from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FitnessUsersDataSourcesUpdatePathParams:
    data_source_id: str = field(metadata={'path_param': { 'field_name': 'dataSourceId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FitnessUsersDataSourcesUpdateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption8:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption9:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption10:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurityOption11:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateSecurity:
    option1: Optional[FitnessUsersDataSourcesUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option10: Optional[FitnessUsersDataSourcesUpdateSecurityOption10] = field(default=None, metadata={'security': { 'option': True }})
    option11: Optional[FitnessUsersDataSourcesUpdateSecurityOption11] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FitnessUsersDataSourcesUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FitnessUsersDataSourcesUpdateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FitnessUsersDataSourcesUpdateSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FitnessUsersDataSourcesUpdateSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FitnessUsersDataSourcesUpdateSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[FitnessUsersDataSourcesUpdateSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[FitnessUsersDataSourcesUpdateSecurityOption8] = field(default=None, metadata={'security': { 'option': True }})
    option9: Optional[FitnessUsersDataSourcesUpdateSecurityOption9] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FitnessUsersDataSourcesUpdateRequest:
    path_params: FitnessUsersDataSourcesUpdatePathParams = field()
    query_params: FitnessUsersDataSourcesUpdateQueryParams = field()
    security: FitnessUsersDataSourcesUpdateSecurity = field()
    request: Optional[shared.DataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FitnessUsersDataSourcesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    data_source: Optional[shared.DataSource] = field(default=None)
    
