from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExposedAPI:
    expose_api: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exposeApi' }})
    open_api_descriptor_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openApiDescriptorUrl' }})
    
