from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PagespeedVersion:
    r"""PagespeedVersion
    The Pagespeed Version object.
    """
    
    major: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('major') }})
    minor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minor') }})
    
