from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFilesV3FilesSearchDoSearchQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    allows_anonymous_access: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowsAnonymousAccess', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    created_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAt', 'style': 'form', 'explode': True }})
    created_at_gte: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAtGte', 'style': 'form', 'explode': True }})
    created_at_lte: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdAtLte', 'style': 'form', 'explode': True }})
    encoding: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'encoding', 'style': 'form', 'explode': True }})
    extension: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'extension', 'style': 'form', 'explode': True }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    is_usable_in_content: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isUsableInContent', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    parent_folder_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parentFolderId', 'style': 'form', 'explode': True }})
    path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    properties: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'properties', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    updated_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAt', 'style': 'form', 'explode': True }})
    updated_at_gte: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAtGte', 'style': 'form', 'explode': True }})
    updated_at_lte: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAtLte', 'style': 'form', 'explode': True }})
    url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesV3FilesSearchDoSearchSecurityOption1:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FilesSearchDoSearchSecurityOption2:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFilesV3FilesSearchDoSearchSecurityOption3:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FilesSearchDoSearchSecurity:
    option1: Optional[GetFilesV3FilesSearchDoSearchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFilesV3FilesSearchDoSearchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetFilesV3FilesSearchDoSearchSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFilesV3FilesSearchDoSearchRequest:
    query_params: GetFilesV3FilesSearchDoSearchQueryParams = field(default=None)
    security: GetFilesV3FilesSearchDoSearchSecurity = field(default=None)
    

@dataclass
class GetFilesV3FilesSearchDoSearchResponse:
    body: bytes = field(default=None)
    collection_response_file: Optional[shared.CollectionResponseFile] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
