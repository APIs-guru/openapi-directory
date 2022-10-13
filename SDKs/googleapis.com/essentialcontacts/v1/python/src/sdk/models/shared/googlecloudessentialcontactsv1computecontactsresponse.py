from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudessentialcontactsv1contact


@dataclass_json
@dataclass
class GoogleCloudEssentialcontactsV1ComputeContactsResponse:
    contacts: Optional[List[googlecloudessentialcontactsv1contact.GoogleCloudEssentialcontactsV1Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
