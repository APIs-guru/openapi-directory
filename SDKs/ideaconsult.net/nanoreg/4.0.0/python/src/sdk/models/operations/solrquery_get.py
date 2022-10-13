from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class SolrqueryGetWtEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class SolrqueryGetQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rows: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    wt: Optional[SolrqueryGetWtEnum] = field(default=None, metadata={'query_param': { 'field_name': 'wt', 'style': 'form', 'explode': True }})
    

@dataclass
class SolrqueryGetRequest:
    query_params: SolrqueryGetQueryParams = field(default=None)
    

@dataclass
class SolrqueryGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    solr_response: Optional[shared.SolrResponse] = field(default=None)
    status_code: int = field(default=None)
    
