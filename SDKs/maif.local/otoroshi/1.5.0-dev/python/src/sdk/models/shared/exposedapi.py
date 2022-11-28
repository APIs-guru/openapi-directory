from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExposedAPI:
    r"""ExposedAPI
    The Open API configuration for your service (if one)
    """
    
    expose_api: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposeApi') }})
    open_api_descriptor_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openApiDescriptorUrl') }})
    
