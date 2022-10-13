from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responseheader
from . import resourcerecordset


@dataclass_json
@dataclass
class ResourceRecordSetsListResponse:
    header: Optional[responseheader.ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    rrsets: Optional[List[resourcerecordset.ResourceRecordSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrsets' }})
    
