from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BooksVolumesGetPathParams:
    volume_id: str = field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    
class BooksVolumesGetProjectionEnum(str, Enum):
    PROJECTION_UNDEFINED = "PROJECTION_UNDEFINED"
    FULL = "FULL"
    LITE = "LITE"


@dataclass
class BooksVolumesGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_non_comics_series: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeNonComicsSeries', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    partner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'partner', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[BooksVolumesGetProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    user_library_consistent_read: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'user_library_consistent_read', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksVolumesGetSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksVolumesGetRequest:
    path_params: BooksVolumesGetPathParams = field()
    query_params: BooksVolumesGetQueryParams = field()
    security: BooksVolumesGetSecurity = field()
    

@dataclass
class BooksVolumesGetResponse:
    content_type: str = field()
    status_code: int = field()
    volume: Optional[shared.Volume] = field(default=None)
    
