from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetResponse:
    content_type: str = field()
    status_code: int = field()
    server_info_representation: Optional[shared.ServerInfoRepresentation] = field(default=None)
    
