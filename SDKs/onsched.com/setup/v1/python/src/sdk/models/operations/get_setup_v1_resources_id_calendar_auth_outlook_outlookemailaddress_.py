from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    outlook_email_address: str = field(metadata={'path_param': { 'field_name': 'outlookEmailAddress', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressQueryParams:
    outlook_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressRequest:
    path_params: GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressPathParams = field()
    query_params: GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressQueryParams = field()
    

@dataclass
class GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse:
    content_type: str = field()
    status_code: int = field()
    calendar_auth_view_model: Optional[shared.CalendarAuthViewModel] = field(default=None)
    
