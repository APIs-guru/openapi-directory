from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ExtrasObjectChangesListQueryParams:
    action: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    changed_object_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'changed_object_type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    object_repr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    request_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'request_id', 'style': 'form', 'explode': True }})
    time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    user_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ExtrasObjectChangesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.ObjectChange] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class ExtrasObjectChangesListRequest:
    query_params: ExtrasObjectChangesListQueryParams = field()
    

@dataclass
class ExtrasObjectChangesListResponse:
    content_type: str = field()
    status_code: int = field()
    extras_object_changes_list_200_application_json_object: Optional[ExtrasObjectChangesList200ApplicationJSON] = field(default=None)
    
