from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ExtrasObjectChangesListQueryParams:
    action: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    action_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'action__n', 'style': 'form', 'explode': True }})
    changed_object_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'changed_object_id', 'style': 'form', 'explode': True }})
    changed_object_id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'changed_object_id__gt', 'style': 'form', 'explode': True }})
    changed_object_id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'changed_object_id__gte', 'style': 'form', 'explode': True }})
    changed_object_id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'changed_object_id__lt', 'style': 'form', 'explode': True }})
    changed_object_id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'changed_object_id__lte', 'style': 'form', 'explode': True }})
    changed_object_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'changed_object_id__n', 'style': 'form', 'explode': True }})
    changed_object_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'changed_object_type', 'style': 'form', 'explode': True }})
    changed_object_type_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'changed_object_type__n', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    object_repr: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr', 'style': 'form', 'explode': True }})
    object_repr_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr__ic', 'style': 'form', 'explode': True }})
    object_repr_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr__ie', 'style': 'form', 'explode': True }})
    object_repr_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr__iew', 'style': 'form', 'explode': True }})
    object_repr_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr__isw', 'style': 'form', 'explode': True }})
    object_repr_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr__n', 'style': 'form', 'explode': True }})
    object_repr_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr__nic', 'style': 'form', 'explode': True }})
    object_repr_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr__nie', 'style': 'form', 'explode': True }})
    object_repr_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr__niew', 'style': 'form', 'explode': True }})
    object_repr_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'object_repr__nisw', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    request_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'request_id', 'style': 'form', 'explode': True }})
    time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    user_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user__n', 'style': 'form', 'explode': True }})
    user_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name', 'style': 'form', 'explode': True }})
    user_name_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name__ic', 'style': 'form', 'explode': True }})
    user_name_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name__ie', 'style': 'form', 'explode': True }})
    user_name_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name__iew', 'style': 'form', 'explode': True }})
    user_name_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name__isw', 'style': 'form', 'explode': True }})
    user_name_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name__n', 'style': 'form', 'explode': True }})
    user_name_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name__nic', 'style': 'form', 'explode': True }})
    user_name_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name__nie', 'style': 'form', 'explode': True }})
    user_name_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name__niew', 'style': 'form', 'explode': True }})
    user_name_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_name__nisw', 'style': 'form', 'explode': True }})
    

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
    
