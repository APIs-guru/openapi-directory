from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FirestoreProjectsLocationsGetPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class FirestoreProjectsLocationsGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    mask_field_paths: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mask.fieldPaths', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    read_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'readTime', 'style': 'form', 'explode': True }})
    transaction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transaction', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class FirestoreProjectsLocationsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirestoreProjectsLocationsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirestoreProjectsLocationsGetSecurity:
    option1: Optional[FirestoreProjectsLocationsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FirestoreProjectsLocationsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FirestoreProjectsLocationsGetRequest:
    path_params: FirestoreProjectsLocationsGetPathParams = field()
    query_params: FirestoreProjectsLocationsGetQueryParams = field()
    security: FirestoreProjectsLocationsGetSecurity = field()
    

@dataclass
class FirestoreProjectsLocationsGetResponse:
    content_type: str = field()
    status_code: int = field()
    location: Optional[shared.Location] = field(default=None)
    
