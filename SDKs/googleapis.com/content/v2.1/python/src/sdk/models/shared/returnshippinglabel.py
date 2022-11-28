from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReturnShippingLabel:
    r"""ReturnShippingLabel
    Return shipping label for a Buy on Google merchant-managed return.
    """
    
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    label_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelUri') }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    
