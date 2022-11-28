from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BaggageTripAndContactPathParams:
    search_id: str = field(metadata={'path_param': { 'field_name': 'searchID', 'style': 'simple', 'explode': False }})
    

@dataclass
class BaggageTripAndContactHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class BaggageTripAndContactSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BaggageTripAndContactRequest:
    headers: BaggageTripAndContactHeaders = field()
    path_params: BaggageTripAndContactPathParams = field()
    security: BaggageTripAndContactSecurity = field()
    

@dataclass
class BaggageTripAndContactResponse:
    content_type: str = field()
    status_code: int = field()
    baggage_trip_and_contact_200_application_json_string: Optional[str] = field(default=None)
    
