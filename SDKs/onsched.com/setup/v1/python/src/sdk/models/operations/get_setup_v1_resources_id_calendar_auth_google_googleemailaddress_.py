from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressPathParams:
    google_email_address: str = field(default=None, metadata={'path_param': { 'field_name': 'googleEmailAddress', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressQueryParams:
    google_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressRequest:
    path_params: GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressPathParams = field(default=None)
    query_params: GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressQueryParams = field(default=None)
    

@dataclass
class GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse:
    calendar_auth_view_model: Optional[shared.CalendarAuthViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
