from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IosDevice:
    r"""IosDevice
    A single iOS device.
    """
    
    ios_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosModelId') }})
    ios_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosVersionId') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    orientation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientation') }})
    
