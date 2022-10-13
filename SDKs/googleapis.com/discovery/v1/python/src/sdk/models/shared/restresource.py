from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import restmethod
from . import restresource


@dataclass_json
@dataclass
class RestResource:
    methods: Optional[dict[str, restmethod.RestMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methods' }})
    resources: Optional[dict[str, restresource.RestResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
