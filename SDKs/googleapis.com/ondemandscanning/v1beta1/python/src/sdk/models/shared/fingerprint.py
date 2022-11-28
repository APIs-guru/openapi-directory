from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Fingerprint:
    r"""Fingerprint
    A set of properties that uniquely identify a given Docker image.
    """
    
    v1_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v1Name') }})
    v2_blob: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v2Blob') }})
    v2_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v2Name') }})
    
