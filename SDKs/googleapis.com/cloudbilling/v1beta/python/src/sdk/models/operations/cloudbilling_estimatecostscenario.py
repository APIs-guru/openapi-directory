from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CloudbillingEstimateCostScenarioQueryParams:
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
class CloudbillingEstimateCostScenarioSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudbillingEstimateCostScenarioSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudbillingEstimateCostScenarioSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudbillingEstimateCostScenarioSecurity:
    option1: Optional[CloudbillingEstimateCostScenarioSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudbillingEstimateCostScenarioSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[CloudbillingEstimateCostScenarioSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudbillingEstimateCostScenarioRequest:
    query_params: CloudbillingEstimateCostScenarioQueryParams = field(default=None)
    request: Optional[shared.EstimateCostScenarioWithListPriceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CloudbillingEstimateCostScenarioSecurity = field(default=None)
    

@dataclass
class CloudbillingEstimateCostScenarioResponse:
    content_type: str = field(default=None)
    estimate_cost_scenario_with_list_price_response: Optional[shared.EstimateCostScenarioWithListPriceResponse] = field(default=None)
    status_code: int = field(default=None)
    
