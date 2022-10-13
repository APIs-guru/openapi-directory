from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workersettings


@dataclass_json
@dataclass
class TaskRunnerSettings:
    alsologtostderr: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alsologtostderr' }})
    base_task_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseTaskDir' }})
    base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseUrl' }})
    commandlines_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commandlinesFileName' }})
    continue_on_exception: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continueOnException' }})
    dataflow_api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowApiVersion' }})
    harness_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'harnessCommand' }})
    language_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageHint' }})
    log_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logDir' }})
    log_to_serialconsole: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logToSerialconsole' }})
    log_upload_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logUploadLocation' }})
    oauth_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthScopes' }})
    parallel_worker_settings: Optional[workersettings.WorkerSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parallelWorkerSettings' }})
    streaming_worker_main_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingWorkerMainClass' }})
    task_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskGroup' }})
    task_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskUser' }})
    temp_storage_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tempStoragePrefix' }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmId' }})
    workflow_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowFileName' }})
    
