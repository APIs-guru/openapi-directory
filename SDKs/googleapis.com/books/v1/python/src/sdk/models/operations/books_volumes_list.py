from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class BooksVolumesListDownloadEnum(str, Enum):
    DOWNLOAD_UNDEFINED = "DOWNLOAD_UNDEFINED"
    EPUB = "EPUB"

class BooksVolumesListFilterEnum(str, Enum):
    FILTER_UNDEFINED = "FILTER_UNDEFINED"
    EBOOKS = "ebooks"
    FREE_EBOOKS = "free-ebooks"
    FULL = "full"
    PAID_EBOOKS = "paid-ebooks"
    PARTIAL = "partial"

class BooksVolumesListLibraryRestrictEnum(str, Enum):
    LIBRARY_RESTRICT_UNDEFINED = "LIBRARY_RESTRICT_UNDEFINED"
    MY_LIBRARY = "my-library"
    NO_RESTRICT = "no-restrict"

class BooksVolumesListMaxAllowedMaturityRatingEnum(str, Enum):
    MAX_ALLOWED_MATURITY_RATING_UNDEFINED = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
    MATURE = "MATURE"
    NOT_MATURE = "not-mature"

class BooksVolumesListOrderByEnum(str, Enum):
    ORDER_BY_UNDEFINED = "ORDER_BY_UNDEFINED"
    NEWEST = "newest"
    RELEVANCE = "relevance"

class BooksVolumesListPrintTypeEnum(str, Enum):
    PRINT_TYPE_UNDEFINED = "PRINT_TYPE_UNDEFINED"
    ALL = "ALL"
    BOOKS = "BOOKS"
    MAGAZINES = "MAGAZINES"

class BooksVolumesListProjectionEnum(str, Enum):
    PROJECTION_UNDEFINED = "PROJECTION_UNDEFINED"
    FULL = "FULL"
    LITE = "LITE"


@dataclass
class BooksVolumesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    download: Optional[BooksVolumesListDownloadEnum] = field(default=None, metadata={'query_param': { 'field_name': 'download', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[BooksVolumesListFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    lang_restrict: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'langRestrict', 'style': 'form', 'explode': True }})
    library_restrict: Optional[BooksVolumesListLibraryRestrictEnum] = field(default=None, metadata={'query_param': { 'field_name': 'libraryRestrict', 'style': 'form', 'explode': True }})
    max_allowed_maturity_rating: Optional[BooksVolumesListMaxAllowedMaturityRatingEnum] = field(default=None, metadata={'query_param': { 'field_name': 'maxAllowedMaturityRating', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[BooksVolumesListOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    partner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'partner', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    print_type: Optional[BooksVolumesListPrintTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'printType', 'style': 'form', 'explode': True }})
    projection: Optional[BooksVolumesListProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_preorders: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showPreorders', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksVolumesListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksVolumesListRequest:
    query_params: BooksVolumesListQueryParams = field(default=None)
    security: BooksVolumesListSecurity = field(default=None)
    

@dataclass
class BooksVolumesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volumes: Optional[shared.Volumes] = field(default=None)
    
