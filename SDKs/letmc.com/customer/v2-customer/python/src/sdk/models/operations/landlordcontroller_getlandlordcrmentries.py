from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetLandlordCrmEntriesPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetLandlordCrmEntriesQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetLandlordCrmEntriesRequest:
    path_params: LandlordControllerGetLandlordCrmEntriesPathParams = field(default=None)
    query_params: LandlordControllerGetLandlordCrmEntriesQueryParams = field(default=None)
    

@dataclass
class LandlordControllerGetLandlordCrmEntriesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    landlord_crm_entries: Optional[List[shared.LandlordCrmEntry]] = field(default=None)
    status_code: int = field(default=None)
    
