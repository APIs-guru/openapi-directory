from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class BooksLayersVolumeAnnotationsListPathParams:
    layer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'layerId', 'style': 'simple', 'explode': False }})
    volume_id: str = field(default=None, metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BooksLayersVolumeAnnotationsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    content_version: str = field(default=None, metadata={'query_param': { 'field_name': 'contentVersion', 'style': 'form', 'explode': True }})
    end_offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endOffset', 'style': 'form', 'explode': True }})
    end_position: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endPosition', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    start_offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startOffset', 'style': 'form', 'explode': True }})
    start_position: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startPosition', 'style': 'form', 'explode': True }})
    updated_max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updatedMax', 'style': 'form', 'explode': True }})
    updated_min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updatedMin', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    volume_annotations_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'volumeAnnotationsVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksLayersVolumeAnnotationsListSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksLayersVolumeAnnotationsListRequest:
    path_params: BooksLayersVolumeAnnotationsListPathParams = field(default=None)
    query_params: BooksLayersVolumeAnnotationsListQueryParams = field(default=None)
    security: BooksLayersVolumeAnnotationsListSecurity = field(default=None)
    

@dataclass
class BooksLayersVolumeAnnotationsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volumeannotations: Optional[shared.Volumeannotations] = field(default=None)
    
