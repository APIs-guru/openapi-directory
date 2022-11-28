from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IpamAggregatesListQueryParams:
    date_added: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_added', 'style': 'form', 'explode': True }})
    family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rir: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rir', 'style': 'form', 'explode': True }})
    rir_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rir_id', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class IpamAggregatesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.Aggregate] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class IpamAggregatesListRequest:
    query_params: IpamAggregatesListQueryParams = field()
    

@dataclass
class IpamAggregatesListResponse:
    content_type: str = field()
    status_code: int = field()
    ipam_aggregates_list_200_application_json_object: Optional[IpamAggregatesList200ApplicationJSON] = field(default=None)
    
