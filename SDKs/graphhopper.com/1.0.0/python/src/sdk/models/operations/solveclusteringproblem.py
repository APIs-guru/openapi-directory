from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SolveClusteringProblemRequest:
    request: shared.ClusterRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SolveClusteringProblemResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    cluster_response: Optional[shared.ClusterResponse] = field(default=None)
    internal_error_message: Optional[shared.InternalErrorMessage] = field(default=None)
    
