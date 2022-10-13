from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AquifersNamesListQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class AquifersNamesListRequest:
    query_params: AquifersNamesListQueryParams = field(default=None)
    

@dataclass
class AquifersNamesListResponse:
    aquifer_serializer_basics: Optional[List[shared.AquiferSerializerBasic]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
