from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class BooksMylibraryReadingpositionsSetPositionPathParams:
    volume_id: str = field(default=None, metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    
class BooksMylibraryReadingpositionsSetPositionActionEnum(str, Enum):
    ACTION_UNDEFINED = "ACTION_UNDEFINED"
    BOOKMARK = "bookmark"
    CHAPTER = "chapter"
    NEXT_PAGE = "next-page"
    PREV_PAGE = "prev-page"
    SCROLL = "scroll"
    SEARCH = "search"


@dataclass
class BooksMylibraryReadingpositionsSetPositionQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    action: Optional[BooksMylibraryReadingpositionsSetPositionActionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    content_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contentVersion', 'style': 'form', 'explode': True }})
    device_cookie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceCookie', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    position: str = field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksMylibraryReadingpositionsSetPositionSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksMylibraryReadingpositionsSetPositionRequest:
    path_params: BooksMylibraryReadingpositionsSetPositionPathParams = field(default=None)
    query_params: BooksMylibraryReadingpositionsSetPositionQueryParams = field(default=None)
    security: BooksMylibraryReadingpositionsSetPositionSecurity = field(default=None)
    

@dataclass
class BooksMylibraryReadingpositionsSetPositionResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
