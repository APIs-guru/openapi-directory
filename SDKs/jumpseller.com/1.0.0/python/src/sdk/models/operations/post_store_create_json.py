from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostStoreCreateJSONQueryParams:
    auth_token: str = field(default=None, metadata={'query_param': { 'field_name': 'auth_token', 'style': 'form', 'explode': True }})
    partner_code: str = field(default=None, metadata={'query_param': { 'field_name': 'partner_code', 'style': 'form', 'explode': True }})
    

@dataclass
class PostStoreCreateJSONRequest:
    query_params: PostStoreCreateJSONQueryParams = field(default=None)
    request: shared.PartnerStoreCreate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostStoreCreateJSONResponse:
    content_type: str = field(default=None)
    partner_error: Optional[shared.PartnerError] = field(default=None)
    partner_store_code: Optional[shared.PartnerStoreCode] = field(default=None)
    status_code: int = field(default=None)
    
