from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetIssueTokenRequest:
    request: shared.IssueTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestnetIssueTokenResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    issue_token_response: Optional[shared.IssueTokenResponse] = field(default=None)
    
