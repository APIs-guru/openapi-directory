from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class FirestoreProjectsDatabasesDocumentsListDocumentsPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    mask_field_paths: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mask.fieldPaths', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    read_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'readTime', 'style': 'form', 'explode': True }})
    show_missing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showMissing', 'style': 'form', 'explode': True }})
    transaction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transaction', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FirestoreProjectsDatabasesDocumentsListDocumentsSecurity:
    option1: Optional[FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FirestoreProjectsDatabasesDocumentsListDocumentsRequest:
    path_params: FirestoreProjectsDatabasesDocumentsListDocumentsPathParams = field(default=None)
    query_params: FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams = field(default=None)
    security: FirestoreProjectsDatabasesDocumentsListDocumentsSecurity = field(default=None)
    

@dataclass
class FirestoreProjectsDatabasesDocumentsListDocumentsResponse:
    content_type: str = field(default=None)
    list_documents_response: Optional[shared.ListDocumentsResponse] = field(default=None)
    status_code: int = field(default=None)
    
