from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import insurancenetwork


@dataclass_json
@dataclass
class ListInsuranceNetworksResponse:
    networks: Optional[List[insurancenetwork.InsuranceNetwork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
