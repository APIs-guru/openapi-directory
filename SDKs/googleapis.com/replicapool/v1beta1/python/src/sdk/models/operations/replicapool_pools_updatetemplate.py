from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReplicapoolPoolsUpdatetemplatePathParams:
    pool_name: str = field(metadata={'path_param': { 'field_name': 'poolName', 'style': 'simple', 'explode': False }})
    project_name: str = field(metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    zone: str = field(metadata={'path_param': { 'field_name': 'zone', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplicapoolPoolsUpdatetemplateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class ReplicapoolPoolsUpdatetemplateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolPoolsUpdatetemplateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolPoolsUpdatetemplateSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReplicapoolPoolsUpdatetemplateSecurity:
    option1: Optional[ReplicapoolPoolsUpdatetemplateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ReplicapoolPoolsUpdatetemplateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[ReplicapoolPoolsUpdatetemplateSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ReplicapoolPoolsUpdatetemplateRequest:
    path_params: ReplicapoolPoolsUpdatetemplatePathParams = field()
    query_params: ReplicapoolPoolsUpdatetemplateQueryParams = field()
    security: ReplicapoolPoolsUpdatetemplateSecurity = field()
    request: Optional[shared.Template] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReplicapoolPoolsUpdatetemplateResponse:
    content_type: str = field()
    status_code: int = field()
    
