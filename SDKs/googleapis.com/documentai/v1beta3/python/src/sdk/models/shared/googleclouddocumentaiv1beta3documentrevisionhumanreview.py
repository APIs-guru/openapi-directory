from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview:
    r"""GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview
    Human Review information of the document.
    """
    
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    
