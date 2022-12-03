from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TemporaryLinkV1:
    r"""TemporaryLinkV1
    A temporary link for a file, that lasts for 15 minutes. 
    """
    
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
