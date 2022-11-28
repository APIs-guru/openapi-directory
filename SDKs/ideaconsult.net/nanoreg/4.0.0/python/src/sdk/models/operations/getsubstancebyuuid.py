from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSubstanceByUUIDPathParams:
    db: shared.AmbitDatabaseIDEnum = field(metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubstanceByUUIDQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    property_uris_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'property_uris[]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubstanceByUUIDRequest:
    path_params: GetSubstanceByUUIDPathParams = field()
    query_params: GetSubstanceByUUIDQueryParams = field()
    

@dataclass
class GetSubstanceByUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    substance: Optional[shared.Substance] = field(default=None)
    
