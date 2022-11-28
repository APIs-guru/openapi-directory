from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReadEntitiesV1EnCoreWebSmEntitiesPostRequest:
    request: shared.UserRequestIn = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReadEntitiesV1EnCoreWebSmEntitiesPostResponse:
    content_type: str = field()
    status_code: int = field()
    entities_out: Optional[shared.EntitiesOut] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
