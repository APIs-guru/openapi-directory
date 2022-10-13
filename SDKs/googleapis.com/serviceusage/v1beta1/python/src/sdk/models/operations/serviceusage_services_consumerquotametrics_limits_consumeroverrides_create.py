from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum(str, Enum):
    QUOTA_SAFETY_CHECK_UNSPECIFIED = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
    LIMIT_DECREASE_BELOW_USAGE = "LIMIT_DECREASE_BELOW_USAGE"
    LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"


@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    force: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    force_only: Optional[List[ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'forceOnly', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity:
    option1: Optional[ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest:
    path_params: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams = field(default=None)
    query_params: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams = field(default=None)
    request: Optional[shared.QuotaOverride] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity = field(default=None)
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse:
    content_type: str = field(default=None)
    operation: Optional[shared.Operation] = field(default=None)
    status_code: int = field(default=None)
    
