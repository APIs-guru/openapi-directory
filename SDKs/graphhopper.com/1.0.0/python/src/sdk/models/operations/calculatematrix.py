from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CalculateMatrixRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CalculateMatrixResponse:
    content_type: str = field(default=None)
    gh_error: Optional[shared.GhError] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    job_id: Optional[shared.JobID] = field(default=None)
    status_code: int = field(default=None)
    
