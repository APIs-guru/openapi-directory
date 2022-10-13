from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIVersionResponse:
    api_version: Optional[shared.APIVersion] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
