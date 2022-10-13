from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIPartResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erskine_may_parts: Optional[List[shared.ErskineMayPart]] = field(default=None)
    status_code: int = field(default=None)
    
