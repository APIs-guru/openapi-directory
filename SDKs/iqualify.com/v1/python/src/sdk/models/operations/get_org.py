from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOrgResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    org_response: Optional[shared.OrgResponse] = field(default=None)
    
