from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apiserviceout


@dataclass_json
@dataclass
class APIServicesOut:
    api_services: Optional[List[apiserviceout.APIServiceOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiServices' }})
    
