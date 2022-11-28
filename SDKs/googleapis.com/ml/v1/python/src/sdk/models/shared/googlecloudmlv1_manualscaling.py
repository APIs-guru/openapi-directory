from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1ManualScaling:
    r"""GoogleCloudMlV1ManualScaling
    Options for manually scaling a model.
    """
    
    nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
