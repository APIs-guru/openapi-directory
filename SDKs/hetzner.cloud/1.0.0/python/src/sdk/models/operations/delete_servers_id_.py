from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteServersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DeleteServersID200ApplicationJSONActionError:
    r"""DeleteServersID200ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteServersID200ApplicationJSONActionResources:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class DeleteServersID200ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteServersID200ApplicationJSONAction:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: DeleteServersID200ApplicationJSONActionError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: List[DeleteServersID200ApplicationJSONActionResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: DeleteServersID200ApplicationJSONActionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class DeleteServersID200ApplicationJSON:
    action: Optional[DeleteServersID200ApplicationJSONAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass
class DeleteServersIDRequest:
    path_params: DeleteServersIDPathParams = field()
    

@dataclass
class DeleteServersIDResponse:
    content_type: str = field()
    status_code: int = field()
    delete_servers_id_200_application_json_object: Optional[DeleteServersID200ApplicationJSON] = field(default=None)
    
