from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class DisplayvideoAdvertisersInvoicesListPathParams:
    advertiser_id: str = field(default=None, metadata={'path_param': { 'field_name': 'advertiserId', 'style': 'simple', 'explode': False }})
    
class DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum(str, Enum):
    LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED = "LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED"
    LOI_SAPIN_INVOICE_TYPE_MEDIA = "LOI_SAPIN_INVOICE_TYPE_MEDIA"
    LOI_SAPIN_INVOICE_TYPE_PLATFORM = "LOI_SAPIN_INVOICE_TYPE_PLATFORM"


@dataclass
class DisplayvideoAdvertisersInvoicesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    issue_month: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'issueMonth', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    loi_sapin_invoice_type: Optional[DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'loiSapinInvoiceType', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DisplayvideoAdvertisersInvoicesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DisplayvideoAdvertisersInvoicesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DisplayvideoAdvertisersInvoicesListSecurity:
    option1: Optional[DisplayvideoAdvertisersInvoicesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DisplayvideoAdvertisersInvoicesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DisplayvideoAdvertisersInvoicesListRequest:
    path_params: DisplayvideoAdvertisersInvoicesListPathParams = field(default=None)
    query_params: DisplayvideoAdvertisersInvoicesListQueryParams = field(default=None)
    security: DisplayvideoAdvertisersInvoicesListSecurity = field(default=None)
    

@dataclass
class DisplayvideoAdvertisersInvoicesListResponse:
    content_type: str = field(default=None)
    list_invoices_response: Optional[shared.ListInvoicesResponse] = field(default=None)
    status_code: int = field(default=None)
    
