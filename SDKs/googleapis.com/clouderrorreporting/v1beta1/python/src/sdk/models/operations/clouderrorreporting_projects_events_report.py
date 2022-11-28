from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ClouderrorreportingProjectsEventsReportPathParams:
    project_name: str = field(metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClouderrorreportingProjectsEventsReportQueryParams:
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
class ClouderrorreportingProjectsEventsReportSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ClouderrorreportingProjectsEventsReportRequest:
    path_params: ClouderrorreportingProjectsEventsReportPathParams = field()
    query_params: ClouderrorreportingProjectsEventsReportQueryParams = field()
    security: ClouderrorreportingProjectsEventsReportSecurity = field()
    request: Optional[shared.ReportedErrorEvent] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ClouderrorreportingProjectsEventsReportResponse:
    content_type: str = field()
    status_code: int = field()
    report_error_event_response: Optional[dict[str, Any]] = field(default=None)
    
