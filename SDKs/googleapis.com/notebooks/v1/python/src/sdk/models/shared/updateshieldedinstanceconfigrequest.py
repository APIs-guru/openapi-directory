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
class UpdateShieldedInstanceConfigRequest:
    r"""UpdateShieldedInstanceConfigRequest
    Request for updating the Shielded Instance config for a notebook instance. You can only use this method on a stopped instance
    """
    
    shielded_instance_config: Optional[ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    
