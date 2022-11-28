from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class PeoplePeopleGetBatchGetSourcesEnum(str, Enum):
    READ_SOURCE_TYPE_UNSPECIFIED = "READ_SOURCE_TYPE_UNSPECIFIED"
    READ_SOURCE_TYPE_PROFILE = "READ_SOURCE_TYPE_PROFILE"
    READ_SOURCE_TYPE_CONTACT = "READ_SOURCE_TYPE_CONTACT"
    READ_SOURCE_TYPE_DOMAIN_CONTACT = "READ_SOURCE_TYPE_DOMAIN_CONTACT"


@dataclass
class PeoplePeopleGetBatchGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    person_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'personFields', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    request_mask_include_field: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'requestMask.includeField', 'style': 'form', 'explode': True }})
    resource_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'resourceNames', 'style': 'form', 'explode': True }})
    sources: Optional[List[PeoplePeopleGetBatchGetSourcesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'sources', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption8:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption9:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption10:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurityOption11:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleGetBatchGetSecurity:
    option1: Optional[PeoplePeopleGetBatchGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option10: Optional[PeoplePeopleGetBatchGetSecurityOption10] = field(default=None, metadata={'security': { 'option': True }})
    option11: Optional[PeoplePeopleGetBatchGetSecurityOption11] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PeoplePeopleGetBatchGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PeoplePeopleGetBatchGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[PeoplePeopleGetBatchGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[PeoplePeopleGetBatchGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[PeoplePeopleGetBatchGetSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[PeoplePeopleGetBatchGetSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[PeoplePeopleGetBatchGetSecurityOption8] = field(default=None, metadata={'security': { 'option': True }})
    option9: Optional[PeoplePeopleGetBatchGetSecurityOption9] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PeoplePeopleGetBatchGetRequest:
    query_params: PeoplePeopleGetBatchGetQueryParams = field()
    security: PeoplePeopleGetBatchGetSecurity = field()
    

@dataclass
class PeoplePeopleGetBatchGetResponse:
    content_type: str = field()
    status_code: int = field()
    get_people_response: Optional[shared.GetPeopleResponse] = field(default=None)
    
