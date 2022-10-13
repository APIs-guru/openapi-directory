from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListServicesResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    list_services_response: Optional[shared.ListServicesResponse] = field(default=None)
    status_code: int = field(default=None)
    
