from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlehomeenterprisesdmv1structure


@dataclass_json
@dataclass
class GoogleHomeEnterpriseSdmV1ListStructuresResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    structures: Optional[List[googlehomeenterprisesdmv1structure.GoogleHomeEnterpriseSdmV1Structure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structures' }})
    
