from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExtraMaterial:
    r"""ExtraMaterial
    Supplementary material to the feedback.
    """
    
    link: Optional[TextLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    video: Optional[VideoLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    
