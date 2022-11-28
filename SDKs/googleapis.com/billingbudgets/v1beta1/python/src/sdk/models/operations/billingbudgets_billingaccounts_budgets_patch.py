from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BillingbudgetsBillingAccountsBudgetsPatchPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class BillingbudgetsBillingAccountsBudgetsPatchQueryParams:
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
class BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BillingbudgetsBillingAccountsBudgetsPatchSecurity:
    option1: Optional[BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BillingbudgetsBillingAccountsBudgetsPatchRequest:
    path_params: BillingbudgetsBillingAccountsBudgetsPatchPathParams = field()
    query_params: BillingbudgetsBillingAccountsBudgetsPatchQueryParams = field()
    security: BillingbudgetsBillingAccountsBudgetsPatchSecurity = field()
    request: Optional[shared.GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BillingbudgetsBillingAccountsBudgetsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_billing_budgets_v1beta1_budget: Optional[shared.GoogleCloudBillingBudgetsV1beta1Budget] = field(default=None)
    
