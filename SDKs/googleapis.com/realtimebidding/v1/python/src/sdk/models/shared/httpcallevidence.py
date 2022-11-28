from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPCallEvidence:
    r"""HTTPCallEvidence
    HTTP calls made by a creative that resulted in policy violations.
    """
    
    urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    
