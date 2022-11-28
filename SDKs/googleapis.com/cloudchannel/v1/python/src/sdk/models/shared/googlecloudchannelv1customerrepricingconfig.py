from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1CustomerRepricingConfig:
    r"""GoogleCloudChannelV1CustomerRepricingConfig
    Configuration for how a reseller will reprice a Customer.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    repricing_config: Optional[GoogleCloudChannelV1RepricingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repricingConfig') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudChannelV1CustomerRepricingConfigInput:
    r"""GoogleCloudChannelV1CustomerRepricingConfigInput
    Configuration for how a reseller will reprice a Customer.
    """
    
    repricing_config: Optional[GoogleCloudChannelV1RepricingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repricingConfig') }})
    
