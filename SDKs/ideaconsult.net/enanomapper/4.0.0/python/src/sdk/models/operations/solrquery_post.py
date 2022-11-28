from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
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
    fl: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fl') }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    

@dataclass_json
@dataclass
class SolrqueryPostRequestBody:
    facet: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facet') }})
    params: Optional[SolrqueryPostRequestBodyParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    

@dataclass
class SolrqueryPostRequest:
    query_params: SolrqueryPostQueryParams = field()
    request: Optional[SolrqueryPostRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SolrqueryPostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    solr_response: Optional[shared.SolrResponse] = field(default=None)
    
