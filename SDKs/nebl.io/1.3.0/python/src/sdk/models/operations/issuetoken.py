from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IssueTokenRequest:
    request: shared.IssueTokenRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssueTokenResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    issue_token_response: Optional[shared.IssueTokenResponse] = field(default=None)
    
