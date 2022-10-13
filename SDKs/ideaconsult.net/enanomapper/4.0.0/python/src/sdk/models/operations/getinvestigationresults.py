from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetInvestigationResultsPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    
class GetInvestigationResultsTypeEnum(str, Enum):
    BYINVESTIGATION = "byinvestigation"
    BYASSAY = "byassay"
    BYSUBSTANCE = "bysubstance"
    BYPROVIDER = "byprovider"
    BYCITATION = "bycitation"
    BYSTUDYTYPE = "bystudytype"
    BYSTRUCTURE_INCHIKEY = "bystructure_inchikey"
    BYSTRUCTURE_SMILES = "bystructure_smiles"
    BYSTRUCTURE_NAME = "bystructure_name"
    BYSUBSTANCE_NAME = "bysubstance_name"
    BYSUBSTANCE_TYPE = "bysubstance_type"


@dataclass
class GetInvestigationResultsQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    inchikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'inchikey', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    search: str = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    type: GetInvestigationResultsTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInvestigationResultsRequest:
    path_params: GetInvestigationResultsPathParams = field(default=None)
    query_params: GetInvestigationResultsQueryParams = field(default=None)
    

@dataclass
class GetInvestigationResultsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    investigation: Optional[shared.Investigation] = field(default=None)
    status_code: int = field(default=None)
    
