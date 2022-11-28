from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Browser:
    r"""Browser
    Contains information about a browser that can be targeted by ads.
    """
    
    browser_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserVersionId') }})
    dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dartId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    major_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minorVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
