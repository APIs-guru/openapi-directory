from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubExchangeTargetingOptionDetails:
    r"""SubExchangeTargetingOptionDetails
    Represents a targetable sub-exchange. This will be populated in the sub_exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
