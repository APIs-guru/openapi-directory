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
class GoogleCloudChannelV1ChannelPartnerRepricingConfigInput:
    r"""GoogleCloudChannelV1ChannelPartnerRepricingConfigInput
    Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
    """
    
    repricing_config: Optional[GoogleCloudChannelV1RepricingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repricingConfig') }})
    

@dataclass_json
@dataclass
class GoogleCloudChannelV1ChannelPartnerRepricingConfig:
    r"""GoogleCloudChannelV1ChannelPartnerRepricingConfig
    Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    repricing_config: Optional[GoogleCloudChannelV1RepricingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repricingConfig') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
