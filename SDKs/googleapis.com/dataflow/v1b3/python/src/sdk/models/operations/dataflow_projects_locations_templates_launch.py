from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DataflowProjectsLocationsTemplatesLaunchPathParams:
    location: str = field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DataflowProjectsLocationsTemplatesLaunchQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    dynamic_template_gcs_path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dynamicTemplate.gcsPath', 'style': 'form', 'explode': True }})
    dynamic_template_staging_location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dynamicTemplate.stagingLocation', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    gcs_path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'gcsPath', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    validate_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'validateOnly', 'style': 'form', 'explode': True }})
    

@dataclass
class DataflowProjectsLocationsTemplatesLaunchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DataflowProjectsLocationsTemplatesLaunchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DataflowProjectsLocationsTemplatesLaunchSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DataflowProjectsLocationsTemplatesLaunchSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DataflowProjectsLocationsTemplatesLaunchSecurity:
    option1: Optional[DataflowProjectsLocationsTemplatesLaunchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DataflowProjectsLocationsTemplatesLaunchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DataflowProjectsLocationsTemplatesLaunchSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DataflowProjectsLocationsTemplatesLaunchSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DataflowProjectsLocationsTemplatesLaunchRequest:
    path_params: DataflowProjectsLocationsTemplatesLaunchPathParams = field()
    query_params: DataflowProjectsLocationsTemplatesLaunchQueryParams = field()
    security: DataflowProjectsLocationsTemplatesLaunchSecurity = field()
    request: Optional[shared.LaunchTemplateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DataflowProjectsLocationsTemplatesLaunchResponse:
    content_type: str = field()
    status_code: int = field()
    launch_template_response: Optional[shared.LaunchTemplateResponse] = field(default=None)
    
