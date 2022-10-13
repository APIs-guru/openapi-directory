from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responseheader
from . import managedzone


@dataclass_json
@dataclass
class ManagedZonesListResponse:
    header: Optional[responseheader.ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    managed_zones: Optional[List[managedzone.ManagedZone]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedZones' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
