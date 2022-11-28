from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobTemplate:
    r"""JobTemplate
    Transcoding job template resource.
    """
    
    config: Optional[JobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
