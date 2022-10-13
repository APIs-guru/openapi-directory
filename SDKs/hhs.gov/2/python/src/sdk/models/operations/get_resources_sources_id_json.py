from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesSourcesIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesSourcesIDJSONRequest:
    path_params: GetResourcesSourcesIDJSONPathParams = field(default=None)
    

@dataclass
class GetResourcesSourcesIDJSONResponse:
    content_type: str = field(default=None)
    source_wrappeds: Optional[List[shared.SourceWrapped]] = field(default=None)
    status_code: int = field(default=None)
    
