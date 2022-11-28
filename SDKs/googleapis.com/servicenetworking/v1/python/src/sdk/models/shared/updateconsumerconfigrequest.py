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
class UpdateConsumerConfigRequestInput:
    r"""UpdateConsumerConfigRequestInput
    Request to update the configuration of a service networking connection including the import/export of custom routes and subnetwork routes with public IP.
    """
    
    consumer_config: Optional[ConsumerConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerConfig') }})
    
