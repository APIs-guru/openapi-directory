from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GcsProfile:
    r"""GcsProfile
    Cloud Storage bucket profile.
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    root_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootPath') }})
    
