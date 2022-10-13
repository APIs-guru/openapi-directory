from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicebinding


@dataclass_json
@dataclass
class ListServiceBindingsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    service_bindings: Optional[List[servicebinding.ServiceBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceBindings' }})
    
