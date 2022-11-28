from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DatastoreProjectsRunAggregationQueryPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatastoreProjectsRunAggregationQueryQueryParams:
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
class DatastoreProjectsRunAggregationQuerySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DatastoreProjectsRunAggregationQuerySecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DatastoreProjectsRunAggregationQuerySecurity:
    option1: Optional[DatastoreProjectsRunAggregationQuerySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DatastoreProjectsRunAggregationQuerySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DatastoreProjectsRunAggregationQueryRequest:
    path_params: DatastoreProjectsRunAggregationQueryPathParams = field()
    query_params: DatastoreProjectsRunAggregationQueryQueryParams = field()
    security: DatastoreProjectsRunAggregationQuerySecurity = field()
    request: Optional[shared.RunAggregationQueryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DatastoreProjectsRunAggregationQueryResponse:
    content_type: str = field()
    status_code: int = field()
    run_aggregation_query_response: Optional[shared.RunAggregationQueryResponse] = field(default=None)
    
