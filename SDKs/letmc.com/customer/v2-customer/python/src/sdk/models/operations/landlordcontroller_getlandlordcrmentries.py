from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetLandlordCrmEntriesPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetLandlordCrmEntriesQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetLandlordCrmEntriesRequest:
    path_params: LandlordControllerGetLandlordCrmEntriesPathParams = field()
    query_params: LandlordControllerGetLandlordCrmEntriesQueryParams = field()
    

@dataclass
class LandlordControllerGetLandlordCrmEntriesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    landlord_crm_entries: Optional[List[shared.LandlordCrmEntry]] = field(default=None)
    
