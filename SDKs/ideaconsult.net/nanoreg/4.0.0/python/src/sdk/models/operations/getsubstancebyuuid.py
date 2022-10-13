from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSubstanceByUUIDPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubstanceByUUIDQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    property_uris_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'property_uris[]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubstanceByUUIDRequest:
    path_params: GetSubstanceByUUIDPathParams = field(default=None)
    query_params: GetSubstanceByUUIDQueryParams = field(default=None)
    

@dataclass
class GetSubstanceByUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    substance: Optional[shared.Substance] = field(default=None)
    
