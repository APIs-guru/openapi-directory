from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPartnersStoresJSONQueryParams:
    auth_token: str = field(metadata={'query_param': { 'field_name': 'auth_token', 'style': 'form', 'explode': True }})
    from_: str = field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    partner_code: str = field(metadata={'query_param': { 'field_name': 'partner_code', 'style': 'form', 'explode': True }})
    to: str = field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPartnersStoresJSONRequest:
    query_params: GetPartnersStoresJSONQueryParams = field()
    

@dataclass
class GetPartnersStoresJSONResponse:
    content_type: str = field()
    status_code: int = field()
    partner_error: Optional[shared.PartnerError] = field(default=None)
    types: Optional[List[shared.Type]] = field(default=None)
    
