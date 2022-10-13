from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import requesttransferactionparam_enum


@dataclass_json
@dataclass
class UpdateCallRequestTransferAnswerURLDestination:
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class UpdateCallRequestTransferAnswerURL:
    action: requesttransferactionparam_enum.RequestTransferActionParamEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    destination: UpdateCallRequestTransferAnswerURLDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    
