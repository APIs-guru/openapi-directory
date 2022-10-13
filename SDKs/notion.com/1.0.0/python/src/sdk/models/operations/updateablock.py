from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateABlockPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateABlockRequestBodyParagraphTextText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass_json
@dataclass
class UpdateABlockRequestBodyParagraphText:
    text: Optional[UpdateABlockRequestBodyParagraphTextText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateABlockRequestBodyParagraph:
    text: Optional[List[UpdateABlockRequestBodyParagraphText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass_json
@dataclass
class UpdateABlockRequestBody:
    paragraph: Optional[UpdateABlockRequestBodyParagraph] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraph' }})
    

@dataclass
class UpdateABlockRequest:
    path_params: UpdateABlockPathParams = field(default=None)
    request: Optional[UpdateABlockRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateABlock200ApplicationJSONParagraphTextAnnotations:
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bold' }})
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italic' }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethrough' }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underline' }})
    

@dataclass_json
@dataclass
class UpdateABlock200ApplicationJSONParagraphTextText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    link: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    

@dataclass_json
@dataclass
class UpdateABlock200ApplicationJSONParagraphText:
    annotations: Optional[UpdateABlock200ApplicationJSONParagraphTextAnnotations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    href: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plain_text' }})
    text: Optional[UpdateABlock200ApplicationJSONParagraphTextText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateABlock200ApplicationJSONParagraph:
    text: Optional[List[UpdateABlock200ApplicationJSONParagraphText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass_json
@dataclass
class UpdateABlock200ApplicationJSON:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    has_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_children' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_edited_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_edited_time' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    paragraph: Optional[UpdateABlock200ApplicationJSONParagraph] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraph' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class UpdateABlockResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_a_block_200_application_json_object: Optional[UpdateABlock200ApplicationJSON] = field(default=None)
    
