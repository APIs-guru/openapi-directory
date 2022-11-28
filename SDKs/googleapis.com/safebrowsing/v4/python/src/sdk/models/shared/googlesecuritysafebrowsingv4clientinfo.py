from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4ClientInfo:
    r"""GoogleSecuritySafebrowsingV4ClientInfo
    The client metadata associated with Safe Browsing API requests.
    """
    
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientVersion') }})
    
