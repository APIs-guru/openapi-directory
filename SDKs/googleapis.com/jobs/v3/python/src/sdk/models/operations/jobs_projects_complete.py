from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class JobsProjectsCompletePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class JobsProjectsCompleteScopeEnum(str, Enum):
    COMPLETION_SCOPE_UNSPECIFIED = "COMPLETION_SCOPE_UNSPECIFIED"
    TENANT = "TENANT"
    PUBLIC = "PUBLIC"

class JobsProjectsCompleteTypeEnum(str, Enum):
    COMPLETION_TYPE_UNSPECIFIED = "COMPLETION_TYPE_UNSPECIFIED"
    JOB_TITLE = "JOB_TITLE"
    COMPANY_NAME = "COMPANY_NAME"
    COMBINED = "COMBINED"


@dataclass
class JobsProjectsCompleteQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    company_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'companyName', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    language_codes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'languageCodes', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    scope: Optional[JobsProjectsCompleteScopeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    type: Optional[JobsProjectsCompleteTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class JobsProjectsCompleteSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class JobsProjectsCompleteSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class JobsProjectsCompleteSecurity:
    option1: Optional[JobsProjectsCompleteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[JobsProjectsCompleteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class JobsProjectsCompleteRequest:
    path_params: JobsProjectsCompletePathParams = field()
    query_params: JobsProjectsCompleteQueryParams = field()
    security: JobsProjectsCompleteSecurity = field()
    

@dataclass
class JobsProjectsCompleteResponse:
    content_type: str = field()
    status_code: int = field()
    complete_query_response: Optional[shared.CompleteQueryResponse] = field(default=None)
    
