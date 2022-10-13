from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import typeprovider


@dataclass_json
@dataclass
class TypeProvidersListResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    type_providers: Optional[List[typeprovider.TypeProvider]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeProviders' }})
    
