from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListSecurity:
    option1: Optional[BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListRequest:
    path_params: BigtableadminProjectsInstancesClustersHotTabletsListPathParams = field()
    query_params: BigtableadminProjectsInstancesClustersHotTabletsListQueryParams = field()
    security: BigtableadminProjectsInstancesClustersHotTabletsListSecurity = field()
    

@dataclass
class BigtableadminProjectsInstancesClustersHotTabletsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_hot_tablets_response: Optional[shared.ListHotTabletsResponse] = field(default=None)
    
