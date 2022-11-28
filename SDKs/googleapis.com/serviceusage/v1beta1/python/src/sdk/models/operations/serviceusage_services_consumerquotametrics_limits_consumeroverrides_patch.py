from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum(str, Enum):
    QUOTA_SAFETY_CHECK_UNSPECIFIED = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
    LIMIT_DECREASE_BELOW_USAGE = "LIMIT_DECREASE_BELOW_USAGE"
    LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"


@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    force: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    force_only: Optional[List[ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'forceOnly', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    update_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updateMask', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity:
    option1: Optional[ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest:
    path_params: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams = field()
    query_params: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams = field()
    security: ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity = field()
    request: Optional[shared.QuotaOverride] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse:
    content_type: str = field()
    status_code: int = field()
    operation: Optional[shared.Operation] = field(default=None)
    
