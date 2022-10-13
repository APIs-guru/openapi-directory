from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateADatabasePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateADatabaseRequestBodyPropertiesWinePairing:
    rich_text: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rich_text' }})
    

@dataclass_json
@dataclass
class UpdateADatabaseRequestBodyProperties:
    wine_pairing: Optional[UpdateADatabaseRequestBodyPropertiesWinePairing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Wine Pairing' }})
    

@dataclass_json
@dataclass
class UpdateADatabaseRequestBodyTitleText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass_json
@dataclass
class UpdateADatabaseRequestBodyTitle:
    text: Optional[UpdateADatabaseRequestBodyTitleText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass_json
@dataclass
class UpdateADatabaseRequestBody:
    properties: Optional[UpdateADatabaseRequestBodyProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    title: Optional[List[UpdateADatabaseRequestBodyTitle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class UpdateADatabaseRequest:
    path_params: UpdateADatabasePathParams = field(default=None)
    request: Optional[UpdateADatabaseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONParent:
    page_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelect:
    options: Optional[List[UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesAuthor:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    multi_select: Optional[UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multi_select' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesLink:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesName:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    title: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesPublisherSelectOptions:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesPublisherSelect:
    options: Optional[List[UpdateADatabase200ApplicationJSONPropertiesPublisherSelectOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesPublisher:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    select: Optional[UpdateADatabase200ApplicationJSONPropertiesPublisherSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesPublishingReleaseDate:
    date: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesRead:
    checkbox: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkbox' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesScore5SelectOptions:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesScore5Select:
    options: Optional[List[UpdateADatabase200ApplicationJSONPropertiesScore5SelectOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesScore5:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    select: Optional[UpdateADatabase200ApplicationJSONPropertiesScore5Select] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesStatusSelectOptions:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesStatusSelect:
    options: Optional[List[UpdateADatabase200ApplicationJSONPropertiesStatusSelectOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesStatus:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    select: Optional[UpdateADatabase200ApplicationJSONPropertiesStatusSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesSummary:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rich_text: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rich_text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesTypeSelectOptions:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesTypeSelect:
    options: Optional[List[UpdateADatabase200ApplicationJSONPropertiesTypeSelectOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesType:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    select: Optional[UpdateADatabase200ApplicationJSONPropertiesTypeSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesWinePairing:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rich_text: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rich_text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONPropertiesDate:
    date: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONProperties:
    author: Optional[UpdateADatabase200ApplicationJSONPropertiesAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Author' }})
    link: Optional[UpdateADatabase200ApplicationJSONPropertiesLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Link' }})
    name: Optional[UpdateADatabase200ApplicationJSONPropertiesName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    publisher: Optional[UpdateADatabase200ApplicationJSONPropertiesPublisher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Publisher' }})
    publishing_release_date: Optional[UpdateADatabase200ApplicationJSONPropertiesPublishingReleaseDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Publishing/Release Date' }})
    read: Optional[UpdateADatabase200ApplicationJSONPropertiesRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Read' }})
    score_5: Optional[UpdateADatabase200ApplicationJSONPropertiesScore5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score /5' }})
    status: Optional[UpdateADatabase200ApplicationJSONPropertiesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    summary: Optional[UpdateADatabase200ApplicationJSONPropertiesSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    type: Optional[UpdateADatabase200ApplicationJSONPropertiesType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    wine_pairing: Optional[UpdateADatabase200ApplicationJSONPropertiesWinePairing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Wine Pairing' }})
    date: Optional[UpdateADatabase200ApplicationJSONPropertiesDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONTitleAnnotations:
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bold' }})
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italic' }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethrough' }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underline' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONTitleText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    link: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSONTitle:
    annotations: Optional[UpdateADatabase200ApplicationJSONTitleAnnotations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    href: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plain_text' }})
    text: Optional[UpdateADatabase200ApplicationJSONTitleText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateADatabase200ApplicationJSON:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_edited_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_edited_time' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    parent: Optional[UpdateADatabase200ApplicationJSONParent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    properties: Optional[UpdateADatabase200ApplicationJSONProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    title: Optional[List[UpdateADatabase200ApplicationJSONTitle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class UpdateADatabaseResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    update_a_database_200_application_json_object: Optional[UpdateADatabase200ApplicationJSON] = field(default=None)
    
