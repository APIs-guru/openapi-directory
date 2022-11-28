from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class BooksVolumesMybooksListAcquireMethodEnum(str, Enum):
    ACQUIRE_METHOD_UNDEFINED = "ACQUIRE_METHOD_UNDEFINED"
    FAMILY_SHARED = "FAMILY_SHARED"
    PREORDERED = "PREORDERED"
    PREVIOUSLY_RENTED = "PREVIOUSLY_RENTED"
    PUBLIC_DOMAIN = "PUBLIC_DOMAIN"
    PURCHASED = "PURCHASED"
    RENTED = "RENTED"
    SAMPLE = "SAMPLE"
    UPLOADED = "UPLOADED"

class BooksVolumesMybooksListProcessingStateEnum(str, Enum):
    PROCESSING_STATE_UNDEFINED = "PROCESSING_STATE_UNDEFINED"
    COMPLETED_FAILED = "COMPLETED_FAILED"
    COMPLETED_SUCCESS = "COMPLETED_SUCCESS"
    RUNNING = "RUNNING"


@dataclass
class BooksVolumesMybooksListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    acquire_method: Optional[List[BooksVolumesMybooksListAcquireMethodEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'acquireMethod', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    processing_state: Optional[List[BooksVolumesMybooksListProcessingStateEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'processingState', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksVolumesMybooksListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksVolumesMybooksListRequest:
    query_params: BooksVolumesMybooksListQueryParams = field()
    security: BooksVolumesMybooksListSecurity = field()
    

@dataclass
class BooksVolumesMybooksListResponse:
    content_type: str = field()
    status_code: int = field()
    volumes: Optional[shared.Volumes] = field(default=None)
    
