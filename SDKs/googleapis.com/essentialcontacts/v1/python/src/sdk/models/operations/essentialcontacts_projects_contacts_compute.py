from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class EssentialcontactsProjectsContactsComputePathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum(str, Enum):
    NOTIFICATION_CATEGORY_UNSPECIFIED = "NOTIFICATION_CATEGORY_UNSPECIFIED"
    ALL = "ALL"
    SUSPENSION = "SUSPENSION"
    SECURITY = "SECURITY"
    TECHNICAL = "TECHNICAL"
    BILLING = "BILLING"
    LEGAL = "LEGAL"
    PRODUCT_UPDATES = "PRODUCT_UPDATES"
    TECHNICAL_INCIDENTS = "TECHNICAL_INCIDENTS"


@dataclass
class EssentialcontactsProjectsContactsComputeQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    notification_categories: Optional[List[EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'notificationCategories', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class EssentialcontactsProjectsContactsComputeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EssentialcontactsProjectsContactsComputeRequest:
    path_params: EssentialcontactsProjectsContactsComputePathParams = field(default=None)
    query_params: EssentialcontactsProjectsContactsComputeQueryParams = field(default=None)
    security: EssentialcontactsProjectsContactsComputeSecurity = field(default=None)
    

@dataclass
class EssentialcontactsProjectsContactsComputeResponse:
    content_type: str = field(default=None)
    google_cloud_essentialcontacts_v1_compute_contacts_response: Optional[shared.GoogleCloudEssentialcontactsV1ComputeContactsResponse] = field(default=None)
    status_code: int = field(default=None)
    
