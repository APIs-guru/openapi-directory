from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleIdentityStsV1ExchangeTokenRequest:
    audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audience' }})
    grant_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grantType' }})
    options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    requested_token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedTokenType' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    subject_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectToken' }})
    subject_token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectTokenType' }})
    
