from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AsyncVrpRequest:
    request: shared.Request = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AsyncVrpResponse:
    bad_request: Optional[shared.BadRequest] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    internal_error_message: Optional[shared.InternalErrorMessage] = field(default=None)
    job_id: Optional[shared.JobID] = field(default=None)
    status_code: int = field(default=None)
    
