from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum(str, Enum):
    MAX_ALLOWED_MATURITY_RATING_UNDEFINED = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
    MATURE = "MATURE"
    NOT_MATURE = "not-mature"


@dataclass
class BooksOnboardingListCategoryVolumesQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    category_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'categoryId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    max_allowed_maturity_rating: Optional[BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum] = field(default=None, metadata={'query_param': { 'field_name': 'maxAllowedMaturityRating', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksOnboardingListCategoryVolumesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksOnboardingListCategoryVolumesRequest:
    query_params: BooksOnboardingListCategoryVolumesQueryParams = field(default=None)
    security: BooksOnboardingListCategoryVolumesSecurity = field(default=None)
    

@dataclass
class BooksOnboardingListCategoryVolumesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volume2: Optional[shared.Volume2] = field(default=None)
    
