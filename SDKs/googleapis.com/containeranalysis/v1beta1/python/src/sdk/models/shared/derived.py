from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Derived:
    r"""Derived
    Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
    """
    
    base_resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseResourceUrl') }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    fingerprint: Optional[Fingerprint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    layer_info: Optional[List[Layer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerInfo') }})
    
