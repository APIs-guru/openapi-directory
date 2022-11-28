from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SQLProjectsInstancesVerifyExternalSyncSettingsPathParams:
    instance: str = field(metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class SQLProjectsInstancesVerifyExternalSyncSettingsQueryParams:
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
class SQLProjectsInstancesVerifyExternalSyncSettingsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SQLProjectsInstancesVerifyExternalSyncSettingsSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SQLProjectsInstancesVerifyExternalSyncSettingsSecurity:
    option1: Optional[SQLProjectsInstancesVerifyExternalSyncSettingsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SQLProjectsInstancesVerifyExternalSyncSettingsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SQLProjectsInstancesVerifyExternalSyncSettingsRequest:
    path_params: SQLProjectsInstancesVerifyExternalSyncSettingsPathParams = field()
    query_params: SQLProjectsInstancesVerifyExternalSyncSettingsQueryParams = field()
    security: SQLProjectsInstancesVerifyExternalSyncSettingsSecurity = field()
    request: Optional[shared.SQLInstancesVerifyExternalSyncSettingsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SQLProjectsInstancesVerifyExternalSyncSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    sql_instances_verify_external_sync_settings_response: Optional[shared.SQLInstancesVerifyExternalSyncSettingsResponse] = field(default=None)
    
