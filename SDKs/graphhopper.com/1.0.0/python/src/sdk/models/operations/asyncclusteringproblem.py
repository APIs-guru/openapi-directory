from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AsyncClusteringProblemRequest:
    request: shared.ClusterRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AsyncClusteringProblemResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    internal_error_message: Optional[shared.InternalErrorMessage] = field(default=None)
    job_id: Optional[shared.JobID] = field(default=None)
    
