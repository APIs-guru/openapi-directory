from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDisplayPreferencesPathParams:
    display_preferences_id: str = field(metadata={'path_param': { 'field_name': 'displayPreferencesId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDisplayPreferencesQueryParams:
    client: str = field(metadata={'query_param': { 'field_name': 'client', 'style': 'form', 'explode': True }})
    user_id: str = field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateDisplayPreferencesRequests:
    display_preferences_dto: Optional[shared.DisplayPreferencesDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    display_preferences_dto1: Optional[shared.DisplayPreferencesDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    display_preferences_dto2: Optional[shared.DisplayPreferencesDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateDisplayPreferencesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateDisplayPreferencesRequest:
    path_params: UpdateDisplayPreferencesPathParams = field()
    query_params: UpdateDisplayPreferencesQueryParams = field()
    request: UpdateDisplayPreferencesRequests = field()
    security: UpdateDisplayPreferencesSecurity = field()
    

@dataclass
class UpdateDisplayPreferencesResponse:
    content_type: str = field()
    status_code: int = field()
    
