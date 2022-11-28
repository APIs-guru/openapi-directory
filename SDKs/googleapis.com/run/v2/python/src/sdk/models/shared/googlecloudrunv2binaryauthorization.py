from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRunV2BinaryAuthorization:
    r"""GoogleCloudRunV2BinaryAuthorization
    Settings for Binary Authorization feature.
    """
    
    breakglass_justification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breakglassJustification') }})
    use_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefault') }})
    
