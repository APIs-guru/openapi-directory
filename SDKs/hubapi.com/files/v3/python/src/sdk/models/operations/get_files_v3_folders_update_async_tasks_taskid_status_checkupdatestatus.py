from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusRequest:
    path_params: GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusPathParams = field()
    security: GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusSecurity = field()
    

@dataclass
class GetFilesV3FoldersUpdateAsyncTasksTaskIDStatusCheckUpdateStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    folder_action_response: Optional[shared.FolderActionResponse] = field(default=None)
    
