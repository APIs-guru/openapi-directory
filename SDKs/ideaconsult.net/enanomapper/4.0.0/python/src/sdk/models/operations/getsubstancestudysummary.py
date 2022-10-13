from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSubstanceStudySummaryPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    
class GetSubstanceStudySummaryTopEnum(str, Enum):
    P_CHEM = "P-CHEM"
    ECOTOX = "ECOTOX"
    ENV_FATE = "ENV FATE"
    TOX = "TOX"
    EXPOSURE = "EXPOSURE"


@dataclass
class GetSubstanceStudySummaryQueryParams:
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    property: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'property', 'style': 'form', 'explode': True }})
    property_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'property_uri', 'style': 'form', 'explode': True }})
    result: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'result', 'style': 'form', 'explode': True }})
    top: Optional[GetSubstanceStudySummaryTopEnum] = field(default=None, metadata={'query_param': { 'field_name': 'top', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubstanceStudySummaryRequest:
    path_params: GetSubstanceStudySummaryPathParams = field(default=None)
    query_params: GetSubstanceStudySummaryQueryParams = field(default=None)
    

@dataclass
class GetSubstanceStudySummaryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    substance_study_summary: Optional[shared.SubstanceStudySummary] = field(default=None)
    
