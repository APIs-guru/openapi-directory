from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSubstanceStudyPathParams:
    db: shared.AmbitDatabaseIDEnum = field(metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    
class GetSubstanceStudyTopEnum(str, Enum):
    P_CHEM = "P-CHEM"
    ECOTOX = "ECOTOX"
    ENV_FATE = "ENV FATE"
    TOX = "TOX"
    EXPOSURE = "EXPOSURE"


@dataclass
class GetSubstanceStudyQueryParams:
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    investigation_uuid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'investigation_uuid', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    property: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'property', 'style': 'form', 'explode': True }})
    property_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'property_uri', 'style': 'form', 'explode': True }})
    top: Optional[GetSubstanceStudyTopEnum] = field(default=None, metadata={'query_param': { 'field_name': 'top', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubstanceStudyRequest:
    path_params: GetSubstanceStudyPathParams = field()
    query_params: GetSubstanceStudyQueryParams = field()
    

@dataclass
class GetSubstanceStudyResponse:
    content_type: str = field()
    status_code: int = field()
    substance_study: Optional[shared.SubstanceStudy] = field(default=None)
    
