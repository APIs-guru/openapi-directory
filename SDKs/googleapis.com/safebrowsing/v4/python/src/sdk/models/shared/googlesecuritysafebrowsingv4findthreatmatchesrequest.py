from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4FindThreatMatchesRequest:
    r"""GoogleSecuritySafebrowsingV4FindThreatMatchesRequest
    Request to check entries against lists.
    """
    
    client: Optional[GoogleSecuritySafebrowsingV4ClientInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    threat_info: Optional[GoogleSecuritySafebrowsingV4ThreatInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threatInfo') }})
    
