from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDisplayPreferencesPathParams:
    display_preferences_id: str = field(default=None, metadata={'path_param': { 'field_name': 'displayPreferencesId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDisplayPreferencesQueryParams:
    client: str = field(default=None, metadata={'query_param': { 'field_name': 'client', 'style': 'form', 'explode': True }})
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDisplayPreferencesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDisplayPreferencesRequest:
    path_params: GetDisplayPreferencesPathParams = field(default=None)
    query_params: GetDisplayPreferencesQueryParams = field(default=None)
    security: GetDisplayPreferencesSecurity = field(default=None)
    

@dataclass
class GetDisplayPreferencesResponse:
    content_type: str = field(default=None)
    display_preferences_dto: Optional[shared.DisplayPreferencesDto] = field(default=None)
    status_code: int = field(default=None)
    
