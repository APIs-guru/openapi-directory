from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesTagsIDFormatPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsIDFormatRequest:
    path_params: GetResourcesTagsIDFormatPathParams = field()
    

@dataclass
class GetResourcesTagsIDFormatResponse:
    content_type: str = field()
    status_code: int = field()
    tag_marshaller_wrappeds: Optional[List[shared.TagMarshallerWrapped]] = field(default=None)
    
