from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BooksMylibraryBookshelvesRemoveVolumePathParams:
    shelf: str = field(metadata={'path_param': { 'field_name': 'shelf', 'style': 'simple', 'explode': False }})
    
class BooksMylibraryBookshelvesRemoveVolumeReasonEnum(str, Enum):
    REASON_UNDEFINED = "REASON_UNDEFINED"
    ONBOARDING = "ONBOARDING"


@dataclass
class BooksMylibraryBookshelvesRemoveVolumeQueryParams:
    volume_id: str = field(metadata={'query_param': { 'field_name': 'volumeId', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    reason: Optional[BooksMylibraryBookshelvesRemoveVolumeReasonEnum] = field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksMylibraryBookshelvesRemoveVolumeSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksMylibraryBookshelvesRemoveVolumeRequest:
    path_params: BooksMylibraryBookshelvesRemoveVolumePathParams = field()
    query_params: BooksMylibraryBookshelvesRemoveVolumeQueryParams = field()
    security: BooksMylibraryBookshelvesRemoveVolumeSecurity = field()
    

@dataclass
class BooksMylibraryBookshelvesRemoveVolumeResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
