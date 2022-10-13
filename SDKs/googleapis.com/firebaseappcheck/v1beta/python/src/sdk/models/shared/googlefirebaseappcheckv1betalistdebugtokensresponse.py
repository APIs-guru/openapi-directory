from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlefirebaseappcheckv1betadebugtoken


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaListDebugTokensResponse:
    debug_tokens: Optional[List[googlefirebaseappcheckv1betadebugtoken.GoogleFirebaseAppcheckV1betaDebugToken]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugTokens' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
