from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption1:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption2:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption3:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurity:
    option1: Optional[GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportRequest:
    path_params: GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportPathParams = field(default=None)
    security: GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurity = field(default=None)
    

@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    file_action_response: Optional[shared.FileActionResponse] = field(default=None)
    status_code: int = field(default=None)
    
