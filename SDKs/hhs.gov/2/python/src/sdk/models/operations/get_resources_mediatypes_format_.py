from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesMediaTypesFormatPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaTypesFormatRequest:
    path_params: GetResourcesMediaTypesFormatPathParams = field(default=None)
    

@dataclass
class GetResourcesMediaTypesFormatResponse:
    content_type: str = field(default=None)
    media_type_holder_wrappeds: Optional[List[shared.MediaTypeHolderWrapped]] = field(default=None)
    status_code: int = field(default=None)
    
