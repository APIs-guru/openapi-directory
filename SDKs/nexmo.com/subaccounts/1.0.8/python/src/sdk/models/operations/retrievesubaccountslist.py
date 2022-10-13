from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RetrieveSubaccountsListPathParams:
    api_key: str = field(default=None, metadata={'path_param': { 'field_name': 'api_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveSubaccountsListSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class RetrieveSubaccountsListRequest:
    path_params: RetrieveSubaccountsListPathParams = field(default=None)
    security: RetrieveSubaccountsListSecurity = field(default=None)
    

@dataclass_json
@dataclass
class RetrieveSubaccountsList401ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveSubaccountsList404ApplicationJSON:
    detail: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class RetrieveSubaccountsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subaccounts_all_response: Optional[Any] = field(default=None)
    unprovisioned_error_response: Optional[shared.UnprovisionedErrorResponse] = field(default=None)
    retrieve_subaccounts_list_401_application_json_object: Optional[RetrieveSubaccountsList401ApplicationJSON] = field(default=None)
    retrieve_subaccounts_list_404_application_json_object: Optional[RetrieveSubaccountsList404ApplicationJSON] = field(default=None)
    
