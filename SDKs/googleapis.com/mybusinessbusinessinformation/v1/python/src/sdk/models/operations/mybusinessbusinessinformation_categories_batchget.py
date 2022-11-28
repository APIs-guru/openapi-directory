from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class MybusinessbusinessinformationCategoriesBatchGetViewEnum(str, Enum):
    CATEGORY_VIEW_UNSPECIFIED = "CATEGORY_VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass
class MybusinessbusinessinformationCategoriesBatchGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'names', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    region_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionCode', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[MybusinessbusinessinformationCategoriesBatchGetViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class MybusinessbusinessinformationCategoriesBatchGetRequest:
    query_params: MybusinessbusinessinformationCategoriesBatchGetQueryParams = field()
    

@dataclass
class MybusinessbusinessinformationCategoriesBatchGetResponse:
    content_type: str = field()
    status_code: int = field()
    batch_get_categories_response: Optional[shared.BatchGetCategoriesResponse] = field(default=None)
    
