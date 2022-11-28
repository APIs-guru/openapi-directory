from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReadVersionV1EnCoreWebSmVersionGetResponse:
    content_type: str = field()
    status_code: int = field()
    version_out: Optional[shared.VersionOut] = field(default=None)
    
