from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigtableadminProjectsLocationsGetPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class BigtableadminProjectsLocationsGetViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    NAME_ONLY = "NAME_ONLY"
    SCHEMA_VIEW = "SCHEMA_VIEW"
    REPLICATION_VIEW = "REPLICATION_VIEW"
    ENCRYPTION_VIEW = "ENCRYPTION_VIEW"
    STATS_VIEW = "STATS_VIEW"
    FULL = "FULL"


@dataclass
class BigtableadminProjectsLocationsGetQueryParams:
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
    view: Optional[BigtableadminProjectsLocationsGetViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class BigtableadminProjectsLocationsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsLocationsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsLocationsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsLocationsGetSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsLocationsGetSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsLocationsGetSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsLocationsGetSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigtableadminProjectsLocationsGetSecurity:
    option1: Optional[BigtableadminProjectsLocationsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigtableadminProjectsLocationsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigtableadminProjectsLocationsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[BigtableadminProjectsLocationsGetSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[BigtableadminProjectsLocationsGetSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[BigtableadminProjectsLocationsGetSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[BigtableadminProjectsLocationsGetSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigtableadminProjectsLocationsGetRequest:
    path_params: BigtableadminProjectsLocationsGetPathParams = field()
    query_params: BigtableadminProjectsLocationsGetQueryParams = field()
    security: BigtableadminProjectsLocationsGetSecurity = field()
    

@dataclass
class BigtableadminProjectsLocationsGetResponse:
    content_type: str = field()
    status_code: int = field()
    location: Optional[shared.Location] = field(default=None)
    
