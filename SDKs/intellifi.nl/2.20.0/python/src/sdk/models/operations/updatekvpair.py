from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateKvPairPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateKvPairRequest:
    path_params: UpdateKvPairPathParams = field(default=None)
    request: shared.KeyValuePairUpdate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateKvPairResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
