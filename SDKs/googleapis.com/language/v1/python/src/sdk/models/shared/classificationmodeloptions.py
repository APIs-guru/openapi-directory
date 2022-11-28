from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClassificationModelOptions:
    r"""ClassificationModelOptions
    Model options available for classification requests.
    """
    
    v1_model: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v1Model') }})
    v2_model: Optional[V2Model] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v2Model') }})
    
