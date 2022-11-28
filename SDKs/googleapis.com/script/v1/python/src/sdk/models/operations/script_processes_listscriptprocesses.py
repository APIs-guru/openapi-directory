from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum(str, Enum):
    PROCESS_STATUS_UNSPECIFIED = "PROCESS_STATUS_UNSPECIFIED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    COMPLETED = "COMPLETED"
    CANCELED = "CANCELED"
    FAILED = "FAILED"
    TIMED_OUT = "TIMED_OUT"
    UNKNOWN = "UNKNOWN"
    DELAYED = "DELAYED"

class ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum(str, Enum):
    PROCESS_TYPE_UNSPECIFIED = "PROCESS_TYPE_UNSPECIFIED"
    ADD_ON = "ADD_ON"
    EXECUTION_API = "EXECUTION_API"
    TIME_DRIVEN = "TIME_DRIVEN"
    TRIGGER = "TRIGGER"
    WEBAPP = "WEBAPP"
    EDITOR = "EDITOR"
    SIMPLE_TRIGGER = "SIMPLE_TRIGGER"
    MENU = "MENU"
    BATCH_TASK = "BATCH_TASK"

class ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum(str, Enum):
    USER_ACCESS_LEVEL_UNSPECIFIED = "USER_ACCESS_LEVEL_UNSPECIFIED"
    NONE = "NONE"
    READ = "READ"
    WRITE = "WRITE"
    OWNER = "OWNER"


@dataclass
class ScriptProcessesListScriptProcessesQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    script_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scriptId', 'style': 'form', 'explode': True }})
    script_process_filter_deployment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scriptProcessFilter.deploymentId', 'style': 'form', 'explode': True }})
    script_process_filter_end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scriptProcessFilter.endTime', 'style': 'form', 'explode': True }})
    script_process_filter_function_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scriptProcessFilter.functionName', 'style': 'form', 'explode': True }})
    script_process_filter_start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scriptProcessFilter.startTime', 'style': 'form', 'explode': True }})
    script_process_filter_statuses: Optional[List[ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'scriptProcessFilter.statuses', 'style': 'form', 'explode': True }})
    script_process_filter_types: Optional[List[ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'scriptProcessFilter.types', 'style': 'form', 'explode': True }})
    script_process_filter_user_access_levels: Optional[List[ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'scriptProcessFilter.userAccessLevels', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ScriptProcessesListScriptProcessesSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ScriptProcessesListScriptProcessesRequest:
    query_params: ScriptProcessesListScriptProcessesQueryParams = field()
    security: ScriptProcessesListScriptProcessesSecurity = field()
    

@dataclass
class ScriptProcessesListScriptProcessesResponse:
    content_type: str = field()
    status_code: int = field()
    list_script_processes_response: Optional[shared.ListScriptProcessesResponse] = field(default=None)
    
