from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class BooksLayersAnnotationDataGetPathParams:
    annotation_data_id: str = field(default=None, metadata={'path_param': { 'field_name': 'annotationDataId', 'style': 'simple', 'explode': False }})
    layer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'layerId', 'style': 'simple', 'explode': False }})
    volume_id: str = field(default=None, metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BooksLayersAnnotationDataGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    allow_web_definitions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowWebDefinitions', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    content_version: str = field(default=None, metadata={'query_param': { 'field_name': 'contentVersion', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    h: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'h', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    scale: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'scale', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    w: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'w', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksLayersAnnotationDataGetSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksLayersAnnotationDataGetRequest:
    path_params: BooksLayersAnnotationDataGetPathParams = field(default=None)
    query_params: BooksLayersAnnotationDataGetQueryParams = field(default=None)
    security: BooksLayersAnnotationDataGetSecurity = field(default=None)
    

@dataclass
class BooksLayersAnnotationDataGetResponse:
    content_type: str = field(default=None)
    dictionary_annotationdata: Optional[shared.DictionaryAnnotationdata] = field(default=None)
    status_code: int = field(default=None)
    
