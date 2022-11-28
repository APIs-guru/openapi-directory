from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageImage:
    r"""GoogleCloudDialogflowV2IntentMessageImage
    The image response message.
    """
    
    accessibility_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibilityText') }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    
