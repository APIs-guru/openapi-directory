from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import endpointphonefrom
from . import endpointphoneto
from . import endpointsip
from . import endpointwebsocket
from . import endpointvbcextension

class CreateCallRequestAnswerURLAnswerMethodEnum(str, Enum):
    POST = "POST"
    GET = "GET"

class CreateCallRequestAnswerURLEventMethodEnum(str, Enum):
    POST = "POST"
    GET = "GET"

class CreateCallRequestAnswerURLMachineDetectionEnum(str, Enum):
    CONTINUE = "continue"
    HANGUP = "hangup"


@dataclass_json
@dataclass
class CreateCallRequestAnswerURL:
    answer_method: Optional[CreateCallRequestAnswerURLAnswerMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer_method' }})
    answer_url: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer_url' }})
    event_method: Optional[CreateCallRequestAnswerURLEventMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_method' }})
    event_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_url' }})
    from_: Optional[endpointphonefrom.EndpointPhoneFrom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    length_timer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length_timer' }})
    machine_detection: Optional[CreateCallRequestAnswerURLMachineDetectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machine_detection' }})
    random_from_number: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'random_from_number' }})
    ringing_timer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ringing_timer' }})
    to: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
