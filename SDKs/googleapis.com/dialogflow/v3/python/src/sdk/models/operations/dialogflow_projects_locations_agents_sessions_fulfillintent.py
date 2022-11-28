from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams:
    session: str = field(metadata={'path_param': { 'field_name': 'session', 'style': 'simple', 'explode': False }})
    

@dataclass
class DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams:
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
class DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity:
    option1: Optional[DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest:
    path_params: DialogflowProjectsLocationsAgentsSessionsFulfillIntentPathParams = field()
    query_params: DialogflowProjectsLocationsAgentsSessionsFulfillIntentQueryParams = field()
    security: DialogflowProjectsLocationsAgentsSessionsFulfillIntentSecurity = field()
    request: Optional[shared.GoogleCloudDialogflowCxV3FulfillIntentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_dialogflow_cx_v3_fulfill_intent_response: Optional[shared.GoogleCloudDialogflowCxV3FulfillIntentResponse] = field(default=None)
    
