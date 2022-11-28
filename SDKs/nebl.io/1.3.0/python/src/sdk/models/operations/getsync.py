from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSyncResponse:
    content_type: str = field()
    status_code: int = field()
    get_sync_response: Optional[shared.GetSyncResponse] = field(default=None)
    
