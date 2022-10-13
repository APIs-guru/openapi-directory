from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class BooksMylibraryBookshelvesRemoveVolumePathParams:
    shelf: str = field(default=None, metadata={'path_param': { 'field_name': 'shelf', 'style': 'simple', 'explode': False }})
    
class BooksMylibraryBookshelvesRemoveVolumeReasonEnum(str, Enum):
    REASON_UNDEFINED = "REASON_UNDEFINED"
    ONBOARDING = "ONBOARDING"


@dataclass
class BooksMylibraryBookshelvesRemoveVolumeQueryParams:
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
    volume_id: str = field(default=None, metadata={'query_param': { 'field_name': 'volumeId', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksMylibraryBookshelvesRemoveVolumeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksMylibraryBookshelvesRemoveVolumeRequest:
    path_params: BooksMylibraryBookshelvesRemoveVolumePathParams = field(default=None)
    query_params: BooksMylibraryBookshelvesRemoveVolumeQueryParams = field(default=None)
    security: BooksMylibraryBookshelvesRemoveVolumeSecurity = field(default=None)
    

@dataclass
class BooksMylibraryBookshelvesRemoveVolumeResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
