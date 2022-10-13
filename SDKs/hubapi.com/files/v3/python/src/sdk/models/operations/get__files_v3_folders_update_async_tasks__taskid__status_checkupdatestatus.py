from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurity:
    option1: Optional[GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusRequest:
    path_params: GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusPathParams = field(default=None)
    security: GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurity = field(default=None)
    

@dataclass
class GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    folder_action_response: Optional[shared.FolderActionResponse] = field(default=None)
    status_code: int = field(default=None)
    
