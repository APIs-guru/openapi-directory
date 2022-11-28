from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReadRootV1EnCoreWebSmGetResponse:
    content_type: str = field()
    status_code: int = field()
    read_root_v1_en_core_web_sm_get_200_application_json_any: Optional[Any] = field(default=None)
    
