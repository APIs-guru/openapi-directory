from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoEventParameters:
    r"""EnterpriseCrmFrontendsEventbusProtoEventParameters
    LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see go/integration-platform/event_bus.md for more details. Next id: 4
    """
    
    parameters: Optional[List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
