from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesTagsIDFormatPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsIDFormatRequest:
    path_params: GetResourcesTagsIDFormatPathParams = field(default=None)
    

@dataclass
class GetResourcesTagsIDFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_marshaller_wrappeds: Optional[List[shared.TagMarshallerWrapped]] = field(default=None)
    
