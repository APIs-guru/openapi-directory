from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum(str, Enum):
    DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED"
    DIRECTORY_MERGE_SOURCE_TYPE_CONTACT = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"

class PeoplePeopleSearchDirectoryPeopleSourcesEnum(str, Enum):
    DIRECTORY_SOURCE_TYPE_UNSPECIFIED = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED"
    DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT"
    DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"


@dataclass
class PeoplePeopleSearchDirectoryPeopleQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    merge_sources: Optional[List[PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'mergeSources', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    read_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'readMask', 'style': 'form', 'explode': True }})
    sources: Optional[List[PeoplePeopleSearchDirectoryPeopleSourcesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'sources', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class PeoplePeopleSearchDirectoryPeopleSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleSearchDirectoryPeopleRequest:
    query_params: PeoplePeopleSearchDirectoryPeopleQueryParams = field()
    security: PeoplePeopleSearchDirectoryPeopleSecurity = field()
    

@dataclass
class PeoplePeopleSearchDirectoryPeopleResponse:
    content_type: str = field()
    status_code: int = field()
    search_directory_people_response: Optional[shared.SearchDirectoryPeopleResponse] = field(default=None)
    
