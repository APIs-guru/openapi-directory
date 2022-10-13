from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import auditevent
from . import paginationlinks
from . import paginationdata


@dataclass_json
@dataclass
class AuditRespEmbedded:
    events: Optional[List[auditevent.AuditEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    

@dataclass_json
@dataclass
class AuditResp:
    embedded: Optional[AuditRespEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[paginationlinks.PaginationLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    page: Optional[paginationdata.PaginationData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
