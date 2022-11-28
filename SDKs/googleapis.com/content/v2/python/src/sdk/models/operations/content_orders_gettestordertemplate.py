from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class ContentOrdersGettestordertemplateTemplateNameEnum(str, Enum):
    TEMPLATE1 = "TEMPLATE1"
    TEMPLATE2 = "TEMPLATE2"
    TEMPLATE1_A = "TEMPLATE1A"
    TEMPLATE1_B = "TEMPLATE1B"
    TEMPLATE3 = "TEMPLATE3"


@dataclass
class ContentOrdersGettestordertemplatePathParams:
    merchant_id: str = field(metadata={'path_param': { 'field_name': 'merchantId', 'style': 'simple', 'explode': False }})
    template_name: ContentOrdersGettestordertemplateTemplateNameEnum = field(metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentOrdersGettestordertemplateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentOrdersGettestordertemplateSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContentOrdersGettestordertemplateRequest:
    path_params: ContentOrdersGettestordertemplatePathParams = field()
    query_params: ContentOrdersGettestordertemplateQueryParams = field()
    security: ContentOrdersGettestordertemplateSecurity = field()
    

@dataclass
class ContentOrdersGettestordertemplateResponse:
    content_type: str = field()
    status_code: int = field()
    orders_get_test_order_template_response: Optional[shared.OrdersGetTestOrderTemplateResponse] = field(default=None)
    
