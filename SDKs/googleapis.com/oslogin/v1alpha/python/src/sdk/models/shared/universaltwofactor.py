from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UniversalTwoFactor:
    r"""UniversalTwoFactor
    Security key information specific to the U2F protocol.
    """
    
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    
