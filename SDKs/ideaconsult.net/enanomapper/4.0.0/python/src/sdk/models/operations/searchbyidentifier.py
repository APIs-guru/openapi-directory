from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class SearchByIdentifierRepresentationEnum(str, Enum):
    ALL = "all"
    SMILES = "smiles"
    REACH = "reach"
    STDINCHI = "stdinchi"
    STDINCHIKEY = "stdinchikey"
    NAMES = "names"
    IUPAC_NAME = "iupac_name"
    SYNONYM = "synonym"
    CAS = "cas"
    EINECS = "einecs"

class SearchByIdentifierTermEnum(str, Enum):
    SEARCH = "search"
    URL = "url"
    INCHIKEY = "inchikey"


@dataclass
class SearchByIdentifierPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    representation: SearchByIdentifierRepresentationEnum = field(default=None, metadata={'path_param': { 'field_name': 'representation', 'style': 'simple', 'explode': False }})
    term: SearchByIdentifierTermEnum = field(default=None, metadata={'path_param': { 'field_name': 'term', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchByIdentifierQueryParams:
    b64search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'b64search', 'style': 'form', 'explode': True }})
    bundle_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bundle_uri', 'style': 'form', 'explode': True }})
    casesens: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'casesens', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    sameas: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sameas', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchByIdentifierRequest:
    path_params: SearchByIdentifierPathParams = field(default=None)
    query_params: SearchByIdentifierQueryParams = field(default=None)
    

@dataclass
class SearchByIdentifierResponse:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
