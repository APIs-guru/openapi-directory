from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ViolatingResource:
    r"""ViolatingResource
    Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
    """
    
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUrl') }})
    
