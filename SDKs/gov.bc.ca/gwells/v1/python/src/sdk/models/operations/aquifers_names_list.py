from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AquifersNamesListQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class AquifersNamesListRequest:
    query_params: AquifersNamesListQueryParams = field()
    

@dataclass
class AquifersNamesListResponse:
    content_type: str = field()
    status_code: int = field()
    aquifer_serializer_basics: Optional[List[shared.AquiferSerializerBasic]] = field(default=None)
    
