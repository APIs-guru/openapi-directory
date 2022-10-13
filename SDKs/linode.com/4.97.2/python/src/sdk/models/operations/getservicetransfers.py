from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetServiceTransfersQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServiceTransfersSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetServiceTransfersSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetServiceTransfersSecurity:
    option1: Optional[GetServiceTransfersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetServiceTransfersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetServiceTransfersRequest:
    query_params: GetServiceTransfersQueryParams = field(default=None)
    security: GetServiceTransfersSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetServiceTransfers200ApplicationJSON:
    data: Optional[List[shared.ServiceTransfer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetServiceTransfersDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetServiceTransfersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_service_transfers_200_application_json_object: Optional[GetServiceTransfers200ApplicationJSON] = field(default=None)
    get_service_transfers_default_application_json_object: Optional[GetServiceTransfersDefaultApplicationJSON] = field(default=None)
    
