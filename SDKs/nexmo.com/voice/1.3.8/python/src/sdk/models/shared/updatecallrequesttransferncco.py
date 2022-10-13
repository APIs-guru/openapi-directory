from dataclasses import dataclass, field
from typing import Any,Enum,List
from dataclasses_json import dataclass_json
from . import requesttransferactionparam_enum


@dataclass_json
@dataclass
class UpdateCallRequestTransferNccoDestination:
    ncco: List[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ncco' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateCallRequestTransferNcco:
    action: requesttransferactionparam_enum.RequestTransferActionParamEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    destination: UpdateCallRequestTransferNccoDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    
