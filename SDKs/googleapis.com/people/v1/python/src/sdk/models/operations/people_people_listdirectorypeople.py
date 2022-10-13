from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class PeoplePeopleListDirectoryPeopleMergeSourcesEnum(str, Enum):
    DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED = "DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED"
    DIRECTORY_MERGE_SOURCE_TYPE_CONTACT = "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"

class PeoplePeopleListDirectoryPeopleSourcesEnum(str, Enum):
    DIRECTORY_SOURCE_TYPE_UNSPECIFIED = "DIRECTORY_SOURCE_TYPE_UNSPECIFIED"
    DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT = "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT"
    DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE = "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"


@dataclass
class PeoplePeopleListDirectoryPeopleQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    merge_sources: Optional[List[PeoplePeopleListDirectoryPeopleMergeSourcesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'mergeSources', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    read_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'readMask', 'style': 'form', 'explode': True }})
    request_sync_token: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'requestSyncToken', 'style': 'form', 'explode': True }})
    sources: Optional[List[PeoplePeopleListDirectoryPeopleSourcesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'sources', 'style': 'form', 'explode': True }})
    sync_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'syncToken', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class PeoplePeopleListDirectoryPeopleSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PeoplePeopleListDirectoryPeopleRequest:
    query_params: PeoplePeopleListDirectoryPeopleQueryParams = field(default=None)
    security: PeoplePeopleListDirectoryPeopleSecurity = field(default=None)
    

@dataclass
class PeoplePeopleListDirectoryPeopleResponse:
    content_type: str = field(default=None)
    list_directory_people_response: Optional[shared.ListDirectoryPeopleResponse] = field(default=None)
    status_code: int = field(default=None)
    
