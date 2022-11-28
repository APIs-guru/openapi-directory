from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIStatusResponse:
    content_type: str = field()
    status_code: int = field()
    api_classifiers_status_out: Optional[shared.APIClassifiersStatusOut] = field(default=None)
    
