from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelsListPathParams:
    location: str = field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    end: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    match: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'match', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelsListSecurity:
    option1: Optional[MonitoringProjectsLocationPrometheusAPIV1LabelsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[MonitoringProjectsLocationPrometheusAPIV1LabelsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[MonitoringProjectsLocationPrometheusAPIV1LabelsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelsListRequest:
    path_params: MonitoringProjectsLocationPrometheusAPIV1LabelsListPathParams = field()
    query_params: MonitoringProjectsLocationPrometheusAPIV1LabelsListQueryParams = field()
    security: MonitoringProjectsLocationPrometheusAPIV1LabelsListSecurity = field()
    

@dataclass
class MonitoringProjectsLocationPrometheusAPIV1LabelsListResponse:
    content_type: str = field()
    status_code: int = field()
    http_body: Optional[shared.HTTPBody] = field(default=None)
    
