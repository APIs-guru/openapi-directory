from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStatisticsResponse:
    content_type: str = field(default=None)
    get_statistics_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
