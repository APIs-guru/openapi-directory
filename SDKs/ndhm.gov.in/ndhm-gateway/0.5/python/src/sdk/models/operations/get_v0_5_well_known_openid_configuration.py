from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV05WellKnownOpenidConfigurationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    open_id_configuration: Optional[shared.OpenIDConfiguration] = field(default=None)
    status_code: int = field(default=None)
    
