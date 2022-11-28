from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesTagsTagTypesFormatPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsTagTypesFormatRequest:
    path_params: GetResourcesTagsTagTypesFormatPathParams = field()
    

@dataclass
class GetResourcesTagsTagTypesFormatResponse:
    content_type: str = field()
    status_code: int = field()
    tag_type_marshaller_wrappeds: Optional[List[shared.TagTypeMarshallerWrapped]] = field(default=None)
    
