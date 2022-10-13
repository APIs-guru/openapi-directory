from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSubstancesPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    
class GetSubstancesTypeEnum(str, Enum):
    SUBSTANCETYPE = "substancetype"
    NAME = "name"
    LIKE = "like"
    REGEXP = "regexp"
    UUIF = "uuif"
    COMP_TOX = "CompTox"
    DOI = "DOI"
    RELIABILITY = "reliability"
    PURPOSE_FLAG = "purposeFlag"
    STUDY_RESULT_TYPE = "studyResultType"
    IS_ROBUST_STUDY = "isRobustStudy"
    CITATION = "citation"
    CITATIONOWNER = "citationowner"
    TOPCATEGORY = "topcategory"
    ENDPOINTCATEGORY = "endpointcategory"
    PARAMS = "params"
    OWNER_NAME = "owner_name"
    OWNER_UUID = "owner_uuid"
    RELATED = "related"
    REFERENCE = "reference"
    FACET = "facet"


@dataclass
class GetSubstancesQueryParams:
    add_dummy_substance: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'addDummySubstance', 'style': 'form', 'explode': True }})
    bundle_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bundle_uri', 'style': 'form', 'explode': True }})
    compound_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'compound_uri', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    studysummary: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'studysummary', 'style': 'form', 'explode': True }})
    type: Optional[GetSubstancesTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubstancesRequest:
    path_params: GetSubstancesPathParams = field(default=None)
    query_params: GetSubstancesQueryParams = field(default=None)
    

@dataclass
class GetSubstancesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    substance: Optional[shared.Substance] = field(default=None)
    
