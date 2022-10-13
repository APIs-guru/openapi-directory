from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSubstanceStudyPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetSubstanceStudyPathParams = field(default=None)
    query_params: GetSubstanceStudyQueryParams = field(default=None)
    

@dataclass
class GetSubstanceStudyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    substance_study: Optional[shared.SubstanceStudy] = field(default=None)
    
