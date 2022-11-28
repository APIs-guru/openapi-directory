from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1MarketingInfo:
    r"""GoogleCloudChannelV1MarketingInfo
    Represents the marketing information for a Product, SKU or Offer.
    """
    
    default_logo: Optional[GoogleCloudChannelV1Media] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLogo') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    
