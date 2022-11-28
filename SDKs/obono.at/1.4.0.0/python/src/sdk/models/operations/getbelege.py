from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetBelegePathParams:
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    
class GetBelegeFormatEnum(str, Enum):
    EXPORT = "export"
    BELEG = "beleg"
    UUIDLIST = "uuidlist"

class GetBelegeOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetBelegeQueryParams:
    format: GetBelegeFormatEnum = field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    gte: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'gte', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    lte: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'lte', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[GetBelegeOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBelegeRequest:
    path_params: GetBelegePathParams = field()
    query_params: GetBelegeQueryParams = field()
    

@dataclass
class GetBelegeResponse:
    content_type: str = field()
    status_code: int = field()
    belege: Optional[shared.Belege] = field(default=None)
    
