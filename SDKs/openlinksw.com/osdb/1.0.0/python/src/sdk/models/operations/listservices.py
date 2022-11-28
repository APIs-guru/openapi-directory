from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListServicesResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    list_services_response: Optional[shared.ListServicesResponse] = field(default=None)
    
