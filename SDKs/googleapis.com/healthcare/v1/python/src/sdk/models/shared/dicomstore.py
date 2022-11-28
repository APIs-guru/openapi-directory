from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DicomStore:
    r"""DicomStore
    Represents a DICOM store.
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_config: Optional[NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfig') }})
    
