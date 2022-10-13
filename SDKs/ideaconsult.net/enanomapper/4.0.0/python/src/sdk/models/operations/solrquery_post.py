from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class SolrqueryPostWtEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class SolrqueryPostQueryParams:
    wt: Optional[SolrqueryPostWtEnum] = field(default=None, metadata={'query_param': { 'field_name': 'wt', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SolrqueryPostRequestBodyParams:
    fl: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fl' }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    

@dataclass_json
@dataclass
class SolrqueryPostRequestBody:
    facet: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facet' }})
    params: Optional[SolrqueryPostRequestBodyParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    

@dataclass
class SolrqueryPostRequest:
    query_params: SolrqueryPostQueryParams = field(default=None)
    request: Optional[SolrqueryPostRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SolrqueryPostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    solr_response: Optional[shared.SolrResponse] = field(default=None)
    status_code: int = field(default=None)
    
