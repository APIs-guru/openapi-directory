from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RetrieveBalanceTransfersPathParams:
    api_key: str = field(default=None, metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveBalanceTransfersQueryParams:
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    start_date: str = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    subaccount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subaccount', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveBalanceTransfersSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class RetrieveBalanceTransfersRequest:
    path_params: RetrieveBalanceTransfersPathParams = field(default=None)
    query_params: RetrieveBalanceTransfersQueryParams = field(default=None)
    security: RetrieveBalanceTransfersSecurity = field(default=None)
    

@dataclass_json
@dataclass
class RetrieveBalanceTransfers401ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveBalanceTransfers404ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class RetrieveBalanceTransfersResponse:
    content_type: str = field(default=None)
    list_balance_transfers_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unprovisioned_error_response: Optional[shared.UnprovisionedErrorResponse] = field(default=None)
    retrieve_balance_transfers_401_application_json_object: Optional[RetrieveBalanceTransfers401ApplicationJSON] = field(default=None)
    retrieve_balance_transfers_404_application_json_object: Optional[RetrieveBalanceTransfers404ApplicationJSON] = field(default=None)
    
