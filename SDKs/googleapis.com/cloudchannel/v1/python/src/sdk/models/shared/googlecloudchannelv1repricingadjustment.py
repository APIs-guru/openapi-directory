from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1RepricingAdjustment:
    r"""GoogleCloudChannelV1RepricingAdjustment
    A type that represents the various adjustments you can apply to a bill.
    """
    
    percentage_adjustment: Optional[GoogleCloudChannelV1PercentageAdjustment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentageAdjustment') }})
    
