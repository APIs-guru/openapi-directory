from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoEventBusProperties:
    r"""EnterpriseCrmEventbusProtoEventBusProperties
    LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus. Please see go/cloud-crm-eng/platform/event_bus.md for more details.
    """
    
    properties: Optional[List[EnterpriseCrmEventbusProtoPropertyEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
