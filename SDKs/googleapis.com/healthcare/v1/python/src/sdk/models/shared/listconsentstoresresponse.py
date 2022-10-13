from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consentstore


@dataclass_json
@dataclass
class ListConsentStoresResponse:
    consent_stores: Optional[List[consentstore.ConsentStore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentStores' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
