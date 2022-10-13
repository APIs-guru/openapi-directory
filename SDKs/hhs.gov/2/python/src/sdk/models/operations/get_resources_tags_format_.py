from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesTagsFormatPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsFormatQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    media_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'mediaId', 'style': 'form', 'explode': False }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': False }})
    name_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameContains', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    type_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'typeId', 'style': 'form', 'explode': False }})
    type_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'typeName', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesTagsFormatRequest:
    path_params: GetResourcesTagsFormatPathParams = field(default=None)
    query_params: GetResourcesTagsFormatQueryParams = field(default=None)
    

@dataclass
class GetResourcesTagsFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_marshaller_wrappeds: Optional[List[shared.TagMarshallerWrapped]] = field(default=None)
    
