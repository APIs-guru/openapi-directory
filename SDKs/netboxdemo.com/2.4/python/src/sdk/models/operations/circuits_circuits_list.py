from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CircuitsCircuitsListQueryParams:
    cid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cid', 'style': 'form', 'explode': True }})
    commit_rate: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'commit_rate', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    install_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'install_date', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    provider: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'provider', 'style': 'form', 'explode': True }})
    provider_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'provider_id', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    type_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CircuitsCircuitsList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.Circuit] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class CircuitsCircuitsListRequest:
    query_params: CircuitsCircuitsListQueryParams = field()
    

@dataclass
class CircuitsCircuitsListResponse:
    content_type: str = field()
    status_code: int = field()
    circuits_circuits_list_200_application_json_object: Optional[CircuitsCircuitsList200ApplicationJSON] = field(default=None)
    
