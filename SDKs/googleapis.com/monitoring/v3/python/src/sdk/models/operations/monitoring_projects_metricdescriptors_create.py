from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class MonitoringProjectsMetricDescriptorsCreatePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class MonitoringProjectsMetricDescriptorsCreateQueryParams:
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
class MonitoringProjectsMetricDescriptorsCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsMetricDescriptorsCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsMetricDescriptorsCreateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MonitoringProjectsMetricDescriptorsCreateSecurity:
    option1: Optional[MonitoringProjectsMetricDescriptorsCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[MonitoringProjectsMetricDescriptorsCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[MonitoringProjectsMetricDescriptorsCreateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class MonitoringProjectsMetricDescriptorsCreateRequest:
    path_params: MonitoringProjectsMetricDescriptorsCreatePathParams = field(default=None)
    query_params: MonitoringProjectsMetricDescriptorsCreateQueryParams = field(default=None)
    request: Optional[shared.MetricDescriptor] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: MonitoringProjectsMetricDescriptorsCreateSecurity = field(default=None)
    

@dataclass
class MonitoringProjectsMetricDescriptorsCreateResponse:
    content_type: str = field(default=None)
    metric_descriptor: Optional[shared.MetricDescriptor] = field(default=None)
    status_code: int = field(default=None)
    
