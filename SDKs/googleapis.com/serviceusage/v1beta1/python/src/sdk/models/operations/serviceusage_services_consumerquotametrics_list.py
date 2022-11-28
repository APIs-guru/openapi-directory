from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ServiceusageServicesConsumerQuotaMetricsListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class ServiceusageServicesConsumerQuotaMetricsListViewEnum(str, Enum):
    QUOTA_VIEW_UNSPECIFIED = "QUOTA_VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass
class ServiceusageServicesConsumerQuotaMetricsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[ServiceusageServicesConsumerQuotaMetricsListViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsListSecurity:
    option1: Optional[ServiceusageServicesConsumerQuotaMetricsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ServiceusageServicesConsumerQuotaMetricsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsListRequest:
    path_params: ServiceusageServicesConsumerQuotaMetricsListPathParams = field()
    query_params: ServiceusageServicesConsumerQuotaMetricsListQueryParams = field()
    security: ServiceusageServicesConsumerQuotaMetricsListSecurity = field()
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_consumer_quota_metrics_response: Optional[shared.ListConsumerQuotaMetricsResponse] = field(default=None)
    
