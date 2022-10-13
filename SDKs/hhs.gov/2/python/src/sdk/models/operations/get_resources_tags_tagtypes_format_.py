from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesTagsTagTypesFormatPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsTagTypesFormatRequest:
    path_params: GetResourcesTagsTagTypesFormatPathParams = field(default=None)
    

@dataclass
class GetResourcesTagsTagTypesFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag_type_marshaller_wrappeds: Optional[List[shared.TagTypeMarshallerWrapped]] = field(default=None)
    
