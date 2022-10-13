from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class LoggingConfigLogActionStatesEnum(str, Enum):
    LOGGABLE_ACTION_STATE_UNSPECIFIED = "LOGGABLE_ACTION_STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

class LoggingConfigLogActionsEnum(str, Enum):
    LOGGABLE_ACTION_UNSPECIFIED = "LOGGABLE_ACTION_UNSPECIFIED"
    FIND = "FIND"
    DELETE = "DELETE"
    COPY = "COPY"


@dataclass_json
@dataclass
class LoggingConfig:
    enable_onprem_gcs_transfer_logs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableOnpremGcsTransferLogs' }})
    log_action_states: Optional[List[LoggingConfigLogActionStatesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logActionStates' }})
    log_actions: Optional[List[LoggingConfigLogActionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logActions' }})
    
