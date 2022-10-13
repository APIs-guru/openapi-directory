from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firstandthirdpartyaudience


@dataclass_json
@dataclass
class ListFirstAndThirdPartyAudiencesResponse:
    first_and_third_party_audiences: Optional[List[firstandthirdpartyaudience.FirstAndThirdPartyAudience]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstAndThirdPartyAudiences' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
