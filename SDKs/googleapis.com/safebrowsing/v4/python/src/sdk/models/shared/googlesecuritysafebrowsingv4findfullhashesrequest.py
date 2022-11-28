from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4FindFullHashesRequest:
    r"""GoogleSecuritySafebrowsingV4FindFullHashesRequest
    Request to return full hashes matched by the provided hash prefixes.
    """
    
    api_client: Optional[GoogleSecuritySafebrowsingV4ClientInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiClient') }})
    client: Optional[GoogleSecuritySafebrowsingV4ClientInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    client_states: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientStates') }})
    threat_info: Optional[GoogleSecuritySafebrowsingV4ThreatInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatInfo') }})
    
