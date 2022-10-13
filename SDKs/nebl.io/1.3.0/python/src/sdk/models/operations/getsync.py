from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSyncResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_sync_response: Optional[shared.GetSyncResponse] = field(default=None)
    
