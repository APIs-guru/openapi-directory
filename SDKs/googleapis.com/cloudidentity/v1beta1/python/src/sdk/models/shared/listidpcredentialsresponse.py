from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import idpcredential


@dataclass_json
@dataclass
class ListIdpCredentialsResponse:
    idp_credentials: Optional[List[idpcredential.IdpCredential]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idpCredentials' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
