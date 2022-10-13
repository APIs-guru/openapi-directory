from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class AppendBlockChildrenPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppendBlockChildrenRequestBodyChildrenHeading2TextText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass_json
@dataclass
class AppendBlockChildrenRequestBodyChildrenHeading2Text:
    text: Optional[AppendBlockChildrenRequestBodyChildrenHeading2TextText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class AppendBlockChildrenRequestBodyChildrenHeading2:
    text: Optional[List[AppendBlockChildrenRequestBodyChildrenHeading2Text]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass_json
@dataclass
class AppendBlockChildrenRequestBodyChildren:
    heading_2: Optional[AppendBlockChildrenRequestBodyChildrenHeading2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heading_2' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class AppendBlockChildrenRequestBody:
    children: Optional[List[AppendBlockChildrenRequestBodyChildren]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    

@dataclass
class AppendBlockChildrenRequest:
    path_params: AppendBlockChildrenPathParams = field(default=None)
    request: Optional[AppendBlockChildrenRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class AppendBlockChildren200ApplicationJSONChildPage:
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class AppendBlockChildren200ApplicationJSON:
    child_page: Optional[AppendBlockChildren200ApplicationJSONChildPage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'child_page' }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    has_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_children' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_edited_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_edited_time' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class AppendBlockChildrenResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    append_block_children_200_application_json_object: Optional[AppendBlockChildren200ApplicationJSON] = field(default=None)
    
