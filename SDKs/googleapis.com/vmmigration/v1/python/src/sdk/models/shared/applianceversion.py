from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplianceVersion:
    r"""ApplianceVersion
    Describes an appliance version.
    """
    
    critical: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('critical') }})
    release_notes_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseNotesUri') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
