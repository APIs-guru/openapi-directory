from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RenewalSettings:
    r"""RenewalSettings
    JSON template for a subscription renewal settings.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    renewal_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalType') }})
    
