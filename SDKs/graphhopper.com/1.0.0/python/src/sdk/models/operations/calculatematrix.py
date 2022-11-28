from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CalculateMatrixRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CalculateMatrixResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    gh_error: Optional[shared.GhError] = field(default=None)
    job_id: Optional[shared.JobID] = field(default=None)
    
