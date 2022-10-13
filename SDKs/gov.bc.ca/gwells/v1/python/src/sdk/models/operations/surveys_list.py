from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SurveysListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    surveys: Optional[List[shared.Survey]] = field(default=None)
    
