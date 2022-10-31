from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BaggageTripAndContactPathParams:
    search_id: str = field(default=None, metadata={'path_param': { 'field_name': 'searchID', 'style': 'simple', 'explode': False }})
    

@dataclass
class BaggageTripAndContactHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class BaggageTripAndContactSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BaggageTripAndContactRequest:
    path_params: BaggageTripAndContactPathParams = field(default=None)
    headers: BaggageTripAndContactHeaders = field(default=None)
    security: BaggageTripAndContactSecurity = field(default=None)
    

@dataclass
class BaggageTripAndContactResponse:
    baggage_trip_and_contact_200_application_json_string: Optional[str] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
