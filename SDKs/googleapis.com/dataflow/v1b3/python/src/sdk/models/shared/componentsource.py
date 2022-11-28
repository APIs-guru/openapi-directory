from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComponentSource:
    r"""ComponentSource
    Description of an interstitial value between transforms in an execution stage.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    original_transform_or_collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalTransformOrCollection') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    
