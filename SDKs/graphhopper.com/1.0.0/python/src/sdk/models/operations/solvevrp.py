from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SolveVrpRequest:
    request: shared.Request = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SolveVrpResponse:
    bad_request: Optional[shared.BadRequest] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    internal_error_message: Optional[shared.InternalErrorMessage] = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    status_code: int = field(default=None)
    
