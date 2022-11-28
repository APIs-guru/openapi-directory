from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BooksMylibraryAnnotationsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    content_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contentVersion', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    layer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'layerId', 'style': 'form', 'explode': True }})
    layer_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'layerIds', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    updated_max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updatedMax', 'style': 'form', 'explode': True }})
    updated_min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updatedMin', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    volume_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'volumeId', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksMylibraryAnnotationsListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksMylibraryAnnotationsListRequest:
    query_params: BooksMylibraryAnnotationsListQueryParams = field()
    security: BooksMylibraryAnnotationsListSecurity = field()
    

@dataclass
class BooksMylibraryAnnotationsListResponse:
    content_type: str = field()
    status_code: int = field()
    annotations: Optional[shared.Annotations] = field(default=None)
    
