from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import registerparameters


@dataclass_json
@dataclass
class SearchDomainsResponse:
    register_parameters: Optional[List[registerparameters.RegisterParameters]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registerParameters' }})
    
