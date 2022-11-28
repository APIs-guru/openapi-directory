from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCourseMappingsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    course_mappings: Optional[dict[str, str]] = field(default=None)
    
