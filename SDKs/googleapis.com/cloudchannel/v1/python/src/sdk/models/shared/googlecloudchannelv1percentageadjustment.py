from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1PercentageAdjustment:
    r"""GoogleCloudChannelV1PercentageAdjustment
    An adjustment that applies a flat markup or markdown to an entire bill.
    """
    
    percentage: Optional[GoogleTypeDecimal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    
