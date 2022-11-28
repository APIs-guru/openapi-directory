from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostMatrixRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMatrixResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    gh_error: Optional[shared.GhError] = field(default=None)
    matrix_response: Optional[shared.MatrixResponse] = field(default=None)
    
