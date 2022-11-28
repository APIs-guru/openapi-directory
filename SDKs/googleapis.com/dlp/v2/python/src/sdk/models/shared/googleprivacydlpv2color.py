from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Color:
    r"""GooglePrivacyDlpV2Color
    Represents a color in the RGB color space.
    """
    
    blue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blue') }})
    green: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('green') }})
    red: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('red') }})
    
