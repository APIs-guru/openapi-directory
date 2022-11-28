from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV05WellKnownOpenidConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    open_id_configuration: Optional[shared.OpenIDConfiguration] = field(default=None)
    
