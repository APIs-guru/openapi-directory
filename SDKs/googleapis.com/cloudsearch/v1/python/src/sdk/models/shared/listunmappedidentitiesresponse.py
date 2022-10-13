from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import unmappedidentity


@dataclass_json
@dataclass
class ListUnmappedIdentitiesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unmapped_identities: Optional[List[unmappedidentity.UnmappedIdentity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unmappedIdentities' }})
    
