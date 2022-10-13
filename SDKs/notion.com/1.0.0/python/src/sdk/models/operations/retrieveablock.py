from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class RetrieveABlockPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveABlockRequest:
    path_params: RetrieveABlockPathParams = field(default=None)
    

@dataclass_json
@dataclass
class RetrieveABlock200ApplicationJSONParagraphTextAnnotations:
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bold' }})
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italic' }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethrough' }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underline' }})
    

@dataclass_json
@dataclass
class RetrieveABlock200ApplicationJSONParagraphTextText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    link: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    

@dataclass_json
@dataclass
class RetrieveABlock200ApplicationJSONParagraphText:
    annotations: Optional[RetrieveABlock200ApplicationJSONParagraphTextAnnotations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    href: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plain_text' }})
    text: Optional[RetrieveABlock200ApplicationJSONParagraphTextText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveABlock200ApplicationJSONParagraph:
    text: Optional[List[RetrieveABlock200ApplicationJSONParagraphText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass_json
@dataclass
class RetrieveABlock200ApplicationJSON:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    has_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_children' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_edited_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_edited_time' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    paragraph: Optional[RetrieveABlock200ApplicationJSONParagraph] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraph' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class RetrieveABlockResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    retrieve_a_block_200_application_json_object: Optional[RetrieveABlock200ApplicationJSON] = field(default=None)
    
