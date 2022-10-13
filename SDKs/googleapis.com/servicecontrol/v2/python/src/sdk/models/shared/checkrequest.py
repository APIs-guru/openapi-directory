from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributecontext
from . import resourceinfo


@dataclass_json
@dataclass
class CheckRequest:
    attributes: Optional[attributecontext.AttributeContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    flags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    resources: Optional[List[resourceinfo.ResourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceConfigId' }})
    
