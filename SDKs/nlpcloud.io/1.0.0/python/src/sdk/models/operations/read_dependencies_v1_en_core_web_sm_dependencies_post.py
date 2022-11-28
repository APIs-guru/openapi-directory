from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReadDependenciesV1EnCoreWebSmDependenciesPostRequest:
    request: shared.UserRequestIn = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReadDependenciesV1EnCoreWebSmDependenciesPostResponse:
    content_type: str = field()
    status_code: int = field()
    dependencies_out: Optional[shared.DependenciesOut] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
