from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIStatusResponse:
    api_classifiers_status_out: Optional[shared.APIClassifiersStatusOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
