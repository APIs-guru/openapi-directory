from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DialogflowProjectsLocationsAgentsTestCasesCreatePathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams:
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
class DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DialogflowProjectsLocationsAgentsTestCasesCreateSecurity:
    option1: Optional[DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DialogflowProjectsLocationsAgentsTestCasesCreateRequest:
    path_params: DialogflowProjectsLocationsAgentsTestCasesCreatePathParams = field()
    query_params: DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams = field()
    security: DialogflowProjectsLocationsAgentsTestCasesCreateSecurity = field()
    request: Optional[shared.GoogleCloudDialogflowCxV3TestCaseInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DialogflowProjectsLocationsAgentsTestCasesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_dialogflow_cx_v3_test_case: Optional[shared.GoogleCloudDialogflowCxV3TestCase] = field(default=None)
    
