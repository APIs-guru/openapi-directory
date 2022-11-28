from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PeopleContactGroupsBatchGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    group_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupFields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_members: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxMembers', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    resource_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'resourceNames', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class PeopleContactGroupsBatchGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeopleContactGroupsBatchGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeopleContactGroupsBatchGetSecurity:
    option1: Optional[PeopleContactGroupsBatchGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PeopleContactGroupsBatchGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PeopleContactGroupsBatchGetRequest:
    query_params: PeopleContactGroupsBatchGetQueryParams = field()
    security: PeopleContactGroupsBatchGetSecurity = field()
    

@dataclass
class PeopleContactGroupsBatchGetResponse:
    content_type: str = field()
    status_code: int = field()
    batch_get_contact_groups_response: Optional[shared.BatchGetContactGroupsResponse] = field(default=None)
    
