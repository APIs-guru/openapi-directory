from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest:
    request: shared.UserRequestIn = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    sentence_dependencies_out: Optional[shared.SentenceDependenciesOut] = field(default=None)
    status_code: int = field(default=None)
    
