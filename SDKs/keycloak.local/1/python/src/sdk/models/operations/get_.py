from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetResponse:
    content_type: str = field(default=None)
    server_info_representation: Optional[shared.ServerInfoRepresentation] = field(default=None)
    status_code: int = field(default=None)
    
