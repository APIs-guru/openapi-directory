from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuditRespEmbedded:
    r"""AuditRespEmbedded
    Container containing the `events` array.
    """
    
    events: Optional[List[AuditEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass_json
@dataclass
class AuditResp:
    embedded: Optional[AuditRespEmbedded] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[PaginationLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    page: Optional[PaginationData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
