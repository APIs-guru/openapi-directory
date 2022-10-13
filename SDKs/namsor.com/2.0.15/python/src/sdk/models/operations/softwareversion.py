from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SoftwareVersionResponse:
    content_type: str = field(default=None)
    software_version_out: Optional[shared.SoftwareVersionOut] = field(default=None)
    status_code: int = field(default=None)
    
