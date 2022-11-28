from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplicationInfo:
    r"""ApplicationInfo
    Application related details of a job posting.
    """
    
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    instruction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instruction') }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    
