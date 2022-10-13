from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MfrGetV2ManufacturersGetResponse:
    content_type: str = field(default=None)
    open_aq_result: Optional[shared.OpenAqResult] = field(default=None)
    status_code: int = field(default=None)
    
