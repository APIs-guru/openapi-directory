from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class MonitoringProjectsLocationPrometheusAPIV1QueryPathParams:
    location: str = field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1QueryQueryParams:
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
class MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1QuerySecurity:
    option1: Optional[MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[MonitoringProjectsLocationPrometheusAPIV1QuerySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1QueryRequest:
    path_params: MonitoringProjectsLocationPrometheusAPIV1QueryPathParams = field()
    query_params: MonitoringProjectsLocationPrometheusAPIV1QueryQueryParams = field()
    security: MonitoringProjectsLocationPrometheusAPIV1QuerySecurity = field()
    request: Optional[shared.QueryInstantRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1QueryResponse:
    content_type: str = field()
    status_code: int = field()
    http_body: Optional[shared.HTTPBody] = field(default=None)
    
