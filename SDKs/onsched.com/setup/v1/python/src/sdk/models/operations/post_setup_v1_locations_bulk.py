from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostSetupV1LocationsBulkRequests:
    locations_input_model: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    locations_input_model1: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    locations_input_model2: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    locations_input_model3: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1LocationsBulkRequest:
    request: Optional[PostSetupV1LocationsBulkRequests] = field(default=None)
    

@dataclass
class PostSetupV1LocationsBulkResponse:
    content_type: str = field()
    status_code: int = field()
    location_view_models: Optional[List[shared.LocationViewModel]] = field(default=None)
    
