from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class BooksMyconfigSyncVolumeLicensesFeaturesEnum(str, Enum):
    FEATURES_UNDEFINED = "FEATURES_UNDEFINED"
    RENTALS = "RENTALS"


@dataclass
class BooksMyconfigSyncVolumeLicensesQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    cpksver: str = field(default=None, metadata={'query_param': { 'field_name': 'cpksver', 'style': 'form', 'explode': True }})
    features: Optional[List[BooksMyconfigSyncVolumeLicensesFeaturesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'features', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_non_comics_series: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeNonComicsSeries', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    nonce: str = field(default=None, metadata={'query_param': { 'field_name': 'nonce', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_preorders: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showPreorders', 'style': 'form', 'explode': True }})
    source: str = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    volume_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'volumeIds', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksMyconfigSyncVolumeLicensesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksMyconfigSyncVolumeLicensesRequest:
    query_params: BooksMyconfigSyncVolumeLicensesQueryParams = field(default=None)
    security: BooksMyconfigSyncVolumeLicensesSecurity = field(default=None)
    

@dataclass
class BooksMyconfigSyncVolumeLicensesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volumes: Optional[shared.Volumes] = field(default=None)
    
