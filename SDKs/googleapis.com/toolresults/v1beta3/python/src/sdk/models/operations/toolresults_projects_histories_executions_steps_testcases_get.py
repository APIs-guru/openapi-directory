from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetPathParams:
    execution_id: str = field(metadata={'path_param': { 'field_name': 'executionId', 'style': 'simple', 'explode': False }})
    history_id: str = field(metadata={'path_param': { 'field_name': 'historyId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    step_id: str = field(metadata={'path_param': { 'field_name': 'stepId', 'style': 'simple', 'explode': False }})
    test_case_id: str = field(metadata={'path_param': { 'field_name': 'testCaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetRequest:
    path_params: ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetPathParams = field()
    query_params: ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetQueryParams = field()
    security: ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetSecurity = field()
    

@dataclass
class ToolresultsProjectsHistoriesExecutionsStepsTestCasesGetResponse:
    content_type: str = field()
    status_code: int = field()
    test_case: Optional[shared.TestCase] = field(default=None)
    
