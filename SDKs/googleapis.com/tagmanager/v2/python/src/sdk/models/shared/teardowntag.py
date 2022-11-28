from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeardownTag:
    r"""TeardownTag
    Represents a tag that fires after another tag in order to tear down dependencies.
    """
    
    stop_teardown_on_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopTeardownOnFailure') }})
    tag_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagName') }})
    
