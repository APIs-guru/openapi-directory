from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PeoplePeopleUpdateContactPathParams:
    resource_name: str = field(metadata={'path_param': { 'field_name': 'resourceName', 'style': 'simple', 'explode': False }})
    
class PeoplePeopleUpdateContactSourcesEnum(str, Enum):
    READ_SOURCE_TYPE_UNSPECIFIED = "READ_SOURCE_TYPE_UNSPECIFIED"
    READ_SOURCE_TYPE_PROFILE = "READ_SOURCE_TYPE_PROFILE"
    READ_SOURCE_TYPE_CONTACT = "READ_SOURCE_TYPE_CONTACT"
    READ_SOURCE_TYPE_DOMAIN_CONTACT = "READ_SOURCE_TYPE_DOMAIN_CONTACT"


@dataclass
class PeoplePeopleUpdateContactQueryParams:
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
    sources: Optional[List[PeoplePeopleUpdateContactSourcesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'sources', 'style': 'form', 'explode': True }})
    update_person_fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updatePersonFields', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class PeoplePeopleUpdateContactSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleUpdateContactRequest:
    path_params: PeoplePeopleUpdateContactPathParams = field()
    query_params: PeoplePeopleUpdateContactQueryParams = field()
    security: PeoplePeopleUpdateContactSecurity = field()
    request: Optional[shared.PersonInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PeoplePeopleUpdateContactResponse:
    content_type: str = field()
    status_code: int = field()
    person: Optional[shared.Person] = field(default=None)
    
