from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesMediaTypesFormatPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaTypesFormatRequest:
    path_params: GetResourcesMediaTypesFormatPathParams = field()
    

@dataclass
class GetResourcesMediaTypesFormatResponse:
    content_type: str = field()
    status_code: int = field()
    media_type_holder_wrappeds: Optional[List[shared.MediaTypeHolderWrapped]] = field(default=None)
    
