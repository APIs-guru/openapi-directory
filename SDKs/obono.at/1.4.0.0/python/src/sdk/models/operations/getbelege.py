from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetBelegePathParams:
    registrierkasse_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    
class GetBelegeFormatEnum(str, Enum):
    EXPORT = "export"
    BELEG = "beleg"
    UUIDLIST = "uuidlist"

class GetBelegeOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetBelegeQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    format: GetBelegeFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    gte: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'gte', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    lte: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'lte', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[GetBelegeOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBelegeRequest:
    path_params: GetBelegePathParams = field(default=None)
    query_params: GetBelegeQueryParams = field(default=None)
    

@dataclass
class GetBelegeResponse:
    belege: Optional[shared.Belege] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
