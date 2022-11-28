from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""LoggingConfig
    Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.
    """
    
    enable_onprem_gcs_transfer_logs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableOnpremGcsTransferLogs') }})
    log_action_states: Optional[List[LoggingConfigLogActionStatesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logActionStates') }})
    log_actions: Optional[List[LoggingConfigLogActionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logActions') }})
    
