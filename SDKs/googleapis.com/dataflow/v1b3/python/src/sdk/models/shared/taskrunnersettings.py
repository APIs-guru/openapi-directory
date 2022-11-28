from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskRunnerSettings:
    r"""TaskRunnerSettings
    Taskrunner configuration settings.
    """
    
    alsologtostderr: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alsologtostderr') }})
    base_task_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseTaskDir') }})
    base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseUrl') }})
    commandlines_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commandlinesFileName') }})
    continue_on_exception: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continueOnException') }})
    dataflow_api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowApiVersion') }})
    harness_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('harnessCommand') }})
    language_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageHint') }})
    log_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDir') }})
    log_to_serialconsole: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logToSerialconsole') }})
    log_upload_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logUploadLocation') }})
    oauth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthScopes') }})
    parallel_worker_settings: Optional[WorkerSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelWorkerSettings') }})
    streaming_worker_main_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingWorkerMainClass') }})
    task_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskGroup') }})
    task_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskUser') }})
    temp_storage_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempStoragePrefix') }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    workflow_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowFileName') }})
    
