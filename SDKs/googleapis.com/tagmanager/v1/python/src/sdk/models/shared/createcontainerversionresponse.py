from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateContainerVersionResponse:
    r"""CreateContainerVersionResponse
    Create container versions response.
    """
    
    compiler_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compilerError') }})
    container_version: Optional[ContainerVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerVersion') }})
    
