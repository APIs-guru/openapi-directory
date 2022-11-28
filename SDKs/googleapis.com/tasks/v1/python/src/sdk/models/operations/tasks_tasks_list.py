from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TasksTasksListPathParams:
    tasklist: str = field(metadata={'path_param': { 'field_name': 'tasklist', 'style': 'simple', 'explode': False }})
    

@dataclass
class TasksTasksListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    completed_max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'completedMax', 'style': 'form', 'explode': True }})
    completed_min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'completedMin', 'style': 'form', 'explode': True }})
    due_max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dueMax', 'style': 'form', 'explode': True }})
    due_min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dueMin', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_completed: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showCompleted', 'style': 'form', 'explode': True }})
    show_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    show_hidden: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showHidden', 'style': 'form', 'explode': True }})
    updated_min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updatedMin', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class TasksTasksListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TasksTasksListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TasksTasksListSecurity:
    option1: Optional[TasksTasksListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[TasksTasksListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class TasksTasksListRequest:
    path_params: TasksTasksListPathParams = field()
    query_params: TasksTasksListQueryParams = field()
    security: TasksTasksListSecurity = field()
    

@dataclass
class TasksTasksListResponse:
    content_type: str = field()
    status_code: int = field()
    tasks: Optional[shared.Tasks] = field(default=None)
    
