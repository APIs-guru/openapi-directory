from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetStoreCheckStatusJSONQueryParams:
    auth_token: str = field(metadata={'query_param': { 'field_name': 'auth_token', 'style': 'form', 'explode': True }})
    partner_code: str = field(metadata={'query_param': { 'field_name': 'partner_code', 'style': 'form', 'explode': True }})
    store_code: str = field(metadata={'query_param': { 'field_name': 'store_code', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStoreCheckStatusJSONRequest:
    query_params: GetStoreCheckStatusJSONQueryParams = field()
    

@dataclass
class GetStoreCheckStatusJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_store_check_status_json_200_application_json_one_of: Optional[Any] = field(default=None)
    partner_error: Optional[shared.PartnerError] = field(default=None)
    
