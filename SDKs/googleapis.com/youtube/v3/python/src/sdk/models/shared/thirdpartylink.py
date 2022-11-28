from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThirdPartyLink:
    r"""ThirdPartyLink
    A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    linking_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkingToken') }})
    snippet: Optional[ThirdPartyLinkSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    status: Optional[ThirdPartyLinkStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
