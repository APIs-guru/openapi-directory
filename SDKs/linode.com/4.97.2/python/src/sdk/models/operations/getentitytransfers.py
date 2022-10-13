from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetEntityTransfersQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEntityTransfersSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetEntityTransfersSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEntityTransfersSecurity:
    option1: Optional[GetEntityTransfersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetEntityTransfersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetEntityTransfersRequest:
    query_params: GetEntityTransfersQueryParams = field(default=None)
    security: GetEntityTransfersSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetEntityTransfers200ApplicationJSON:
    data: Optional[List[shared.EntityTransfer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetEntityTransfersDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetEntityTransfersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_entity_transfers_200_application_json_object: Optional[GetEntityTransfers200ApplicationJSON] = field(default=None)
    get_entity_transfers_default_application_json_object: Optional[GetEntityTransfersDefaultApplicationJSON] = field(default=None)
    
