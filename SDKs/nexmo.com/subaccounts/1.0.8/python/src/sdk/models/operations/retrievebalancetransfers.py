from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RetrieveBalanceTransfersPathParams:
    api_key: str = field(metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveBalanceTransfersQueryParams:
    start_date: str = field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    subaccount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subaccount', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveBalanceTransfersSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class RetrieveBalanceTransfers401ApplicationJSON:
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class RetrieveBalanceTransfers404ApplicationJSON:
    r"""RetrieveBalanceTransfers404ApplicationJSON
    Invalid API Key
    """
    
    detail: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class RetrieveBalanceTransfersRequest:
    path_params: RetrieveBalanceTransfersPathParams = field()
    query_params: RetrieveBalanceTransfersQueryParams = field()
    security: RetrieveBalanceTransfersSecurity = field()
    

@dataclass
class RetrieveBalanceTransfersResponse:
    content_type: str = field()
    status_code: int = field()
    list_balance_transfers_response: Optional[Any] = field(default=None)
    unprovisioned_error_response: Optional[shared.UnprovisionedErrorResponse] = field(default=None)
    retrieve_balance_transfers_401_application_json_object: Optional[RetrieveBalanceTransfers401ApplicationJSON] = field(default=None)
    retrieve_balance_transfers_404_application_json_object: Optional[RetrieveBalanceTransfers404ApplicationJSON] = field(default=None)
    
