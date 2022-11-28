from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetQueriesResponse:
    content_type: str = field()
    status_code: int = field()
    get_queries_200_application_json_any: Optional[Any] = field(default=None)
    
