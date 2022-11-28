from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportRequest:
    path_params: GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportPathParams = field()
    security: GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurity = field()
    

@dataclass
class GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    file_action_response: Optional[shared.FileActionResponse] = field(default=None)
    
