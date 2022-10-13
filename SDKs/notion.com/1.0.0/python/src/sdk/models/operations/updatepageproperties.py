from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdatePagePropertiesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdatePagePropertiesRequestBodyPropertiesStatusSelect:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdatePagePropertiesRequestBodyPropertiesStatus:
    select: Optional[UpdatePagePropertiesRequestBodyPropertiesStatusSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    

@dataclass_json
@dataclass
class UpdatePagePropertiesRequestBodyProperties:
    status: Optional[UpdatePagePropertiesRequestBodyPropertiesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    

@dataclass_json
@dataclass
class UpdatePagePropertiesRequestBody:
    properties: Optional[UpdatePagePropertiesRequestBodyProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    

@dataclass
class UpdatePagePropertiesRequest:
    path_params: UpdatePagePropertiesPathParams = field(default=None)
    request: Optional[UpdatePagePropertiesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONParent:
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database_id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesAuthorMultiSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesAuthor:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    multi_select: Optional[List[UpdatePageProperties200ApplicationJSONPropertiesAuthorMultiSelect]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multi_select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesLink:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesNameTitleAnnotations:
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bold' }})
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italic' }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethrough' }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underline' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesNameTitleText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    link: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesNameTitle:
    annotations: Optional[UpdatePageProperties200ApplicationJSONPropertiesNameTitleAnnotations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    href: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plain_text' }})
    text: Optional[UpdatePageProperties200ApplicationJSONPropertiesNameTitleText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesName:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    title: Optional[List[UpdatePageProperties200ApplicationJSONPropertiesNameTitle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesPublisherSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesPublisher:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[UpdatePageProperties200ApplicationJSONPropertiesPublisherSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDateDate:
    end: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDate:
    date: Optional[UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDateDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesRead:
    checkbox: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkbox' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesScore5Select:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesScore5:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[UpdatePageProperties200ApplicationJSONPropertiesScore5Select] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesStatusSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesStatus:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[UpdatePageProperties200ApplicationJSONPropertiesStatusSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextAnnotations:
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bold' }})
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italic' }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethrough' }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underline' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    link: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesSummaryRichText:
    annotations: Optional[UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextAnnotations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    href: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plain_text' }})
    text: Optional[UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesSummary:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    rich_text: Optional[List[UpdatePageProperties200ApplicationJSONPropertiesSummaryRichText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rich_text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesTypeSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONPropertiesType:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[UpdatePageProperties200ApplicationJSONPropertiesTypeSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSONProperties:
    author: Optional[UpdatePageProperties200ApplicationJSONPropertiesAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Author' }})
    link: Optional[UpdatePageProperties200ApplicationJSONPropertiesLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Link' }})
    name: Optional[UpdatePageProperties200ApplicationJSONPropertiesName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    publisher: Optional[UpdatePageProperties200ApplicationJSONPropertiesPublisher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Publisher' }})
    publishing_release_date: Optional[UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Publishing/Release Date' }})
    read: Optional[UpdatePageProperties200ApplicationJSONPropertiesRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Read' }})
    score_5: Optional[UpdatePageProperties200ApplicationJSONPropertiesScore5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score /5' }})
    status: Optional[UpdatePageProperties200ApplicationJSONPropertiesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    summary: Optional[UpdatePageProperties200ApplicationJSONPropertiesSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    type: Optional[UpdatePageProperties200ApplicationJSONPropertiesType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class UpdatePageProperties200ApplicationJSON:
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_edited_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_edited_time' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    parent: Optional[UpdatePageProperties200ApplicationJSONParent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    properties: Optional[UpdatePageProperties200ApplicationJSONProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    

@dataclass
class UpdatePagePropertiesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_page_properties_200_application_json_object: Optional[UpdatePageProperties200ApplicationJSON] = field(default=None)
    
