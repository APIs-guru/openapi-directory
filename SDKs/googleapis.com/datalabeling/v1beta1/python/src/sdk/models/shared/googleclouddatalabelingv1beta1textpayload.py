from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1TextPayload:
    r"""GoogleCloudDatalabelingV1beta1TextPayload
    Container of information about a piece of text.
    """
    
    text_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textContent') }})
    
