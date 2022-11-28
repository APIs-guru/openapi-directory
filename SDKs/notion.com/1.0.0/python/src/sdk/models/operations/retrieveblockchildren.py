from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RetrieveBlockChildrenPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveBlockChildrenQueryParams:
    page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RetrieveBlockChildren200ApplicationJSONResults:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    has_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_children') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_edited_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_edited_time') }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unsupported: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unsupported') }})
    

@dataclass_json
@dataclass
class RetrieveBlockChildren200ApplicationJSON:
    has_more: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_more') }})
    next_cursor: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_cursor') }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    results: Optional[List[RetrieveBlockChildren200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class RetrieveBlockChildrenRequest:
    path_params: RetrieveBlockChildrenPathParams = field()
    query_params: RetrieveBlockChildrenQueryParams = field()
    

@dataclass
class RetrieveBlockChildrenResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    retrieve_block_children_200_application_json_object: Optional[RetrieveBlockChildren200ApplicationJSON] = field(default=None)
    
