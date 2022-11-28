from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FirebasehostingSitesVersionsFilesListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class FirebasehostingSitesVersionsFilesListStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    EXPECTED = "EXPECTED"
    ACTIVE = "ACTIVE"


@dataclass
class FirebasehostingSitesVersionsFilesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    status: Optional[FirebasehostingSitesVersionsFilesListStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class FirebasehostingSitesVersionsFilesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirebasehostingSitesVersionsFilesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirebasehostingSitesVersionsFilesListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirebasehostingSitesVersionsFilesListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirebasehostingSitesVersionsFilesListSecurity:
    option1: Optional[FirebasehostingSitesVersionsFilesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FirebasehostingSitesVersionsFilesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[FirebasehostingSitesVersionsFilesListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[FirebasehostingSitesVersionsFilesListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FirebasehostingSitesVersionsFilesListRequest:
    path_params: FirebasehostingSitesVersionsFilesListPathParams = field()
    query_params: FirebasehostingSitesVersionsFilesListQueryParams = field()
    security: FirebasehostingSitesVersionsFilesListSecurity = field()
    

@dataclass
class FirebasehostingSitesVersionsFilesListResponse:
    content_type: str = field()
    status_code: int = field()
    list_version_files_response: Optional[shared.ListVersionFilesResponse] = field(default=None)
    
