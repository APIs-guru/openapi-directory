from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveAMediaItemResponse:
    content_type: str = field(default=None)
    media: Optional[shared.Media] = field(default=None)
    status_code: int = field(default=None)
    
