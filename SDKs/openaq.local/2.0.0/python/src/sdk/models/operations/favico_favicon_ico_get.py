from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class FavicoFaviconIcoGetResponse:
    content_type: str = field()
    status_code: int = field()
    favico_favicon_ico_get_200_application_json_any: Optional[Any] = field(default=None)
    
