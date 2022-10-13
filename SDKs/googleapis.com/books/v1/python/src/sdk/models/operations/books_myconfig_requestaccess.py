from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class BooksMyconfigRequestAccessLicenseTypesEnum(str, Enum):
    LICENSE_TYPES_UNDEFINED = "LICENSE_TYPES_UNDEFINED"
    BOTH = "BOTH"
    CONCURRENT = "CONCURRENT"
    DOWNLOAD = "DOWNLOAD"


@dataclass
class BooksMyconfigRequestAccessQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    cpksver: str = field(default=None, metadata={'query_param': { 'field_name': 'cpksver', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    license_types: Optional[BooksMyconfigRequestAccessLicenseTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'licenseTypes', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    nonce: str = field(default=None, metadata={'query_param': { 'field_name': 'nonce', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source: str = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    volume_id: str = field(default=None, metadata={'query_param': { 'field_name': 'volumeId', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksMyconfigRequestAccessSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksMyconfigRequestAccessRequest:
    query_params: BooksMyconfigRequestAccessQueryParams = field(default=None)
    security: BooksMyconfigRequestAccessSecurity = field(default=None)
    

@dataclass
class BooksMyconfigRequestAccessResponse:
    content_type: str = field(default=None)
    request_access_data: Optional[shared.RequestAccessData] = field(default=None)
    status_code: int = field(default=None)
    
