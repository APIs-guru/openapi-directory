from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1Product:
    r"""GoogleCloudChannelV1Product
    A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.
    """
    
    marketing_info: Optional[GoogleCloudChannelV1MarketingInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
