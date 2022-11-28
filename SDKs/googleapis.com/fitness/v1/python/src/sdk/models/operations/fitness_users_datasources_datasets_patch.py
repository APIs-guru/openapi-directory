from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FitnessUsersDataSourcesDatasetsPatchPathParams:
    data_source_id: str = field(metadata={'path_param': { 'field_name': 'dataSourceId', 'style': 'simple', 'explode': False }})
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchQueryParams:
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
class FitnessUsersDataSourcesDatasetsPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurityOption8:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurityOption9:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurityOption10:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurityOption11:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchSecurity:
    option1: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option10: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption10] = field(default=None, metadata={'security': { 'option': True }})
    option11: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption11] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption8] = field(default=None, metadata={'security': { 'option': True }})
    option9: Optional[FitnessUsersDataSourcesDatasetsPatchSecurityOption9] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchRequest:
    path_params: FitnessUsersDataSourcesDatasetsPatchPathParams = field()
    query_params: FitnessUsersDataSourcesDatasetsPatchQueryParams = field()
    security: FitnessUsersDataSourcesDatasetsPatchSecurity = field()
    request: Optional[shared.Dataset] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FitnessUsersDataSourcesDatasetsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    dataset: Optional[shared.Dataset] = field(default=None)
    
