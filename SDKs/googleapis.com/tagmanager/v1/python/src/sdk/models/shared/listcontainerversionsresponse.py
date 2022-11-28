from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListContainerVersionsResponse:
    r"""ListContainerVersionsResponse
    List container versions response.
    """
    
    container_version: Optional[List[ContainerVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerVersion') }})
    container_version_header: Optional[List[ContainerVersionHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerVersionHeader') }})
    
