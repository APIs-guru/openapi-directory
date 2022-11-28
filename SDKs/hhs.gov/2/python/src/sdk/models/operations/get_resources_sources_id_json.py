from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesSourcesIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesSourcesIDJSONRequest:
    path_params: GetResourcesSourcesIDJSONPathParams = field()
    

@dataclass
class GetResourcesSourcesIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    source_wrappeds: Optional[List[shared.SourceWrapped]] = field(default=None)
    
