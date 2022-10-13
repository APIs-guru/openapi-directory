from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class FavicoFaviconIcoGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    favico_favicon_ico_get_200_application_json_any: Optional[Any] = field(default=None)
    
