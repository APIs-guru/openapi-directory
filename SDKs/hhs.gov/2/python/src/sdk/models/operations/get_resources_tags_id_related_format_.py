from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesTagsIDRelatedFormatPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsIDRelatedFormatQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesTagsIDRelatedFormatRequest:
    path_params: GetResourcesTagsIDRelatedFormatPathParams = field()
    query_params: GetResourcesTagsIDRelatedFormatQueryParams = field()
    

@dataclass
class GetResourcesTagsIDRelatedFormatResponse:
    content_type: str = field()
    status_code: int = field()
    tag_marshaller_wrappeds: Optional[List[shared.TagMarshallerWrapped]] = field(default=None)
    
