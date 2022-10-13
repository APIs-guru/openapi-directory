from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class RetrieveADatabasePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveADatabaseRequest:
    path_params: RetrieveADatabasePathParams = field(default=None)
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelect:
    options: Optional[List[RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesAuthor:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    multi_select: Optional[RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multi_select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesLink:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesName:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    title: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesPublisherSelectOptions:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesPublisherSelect:
    options: Optional[List[RetrieveADatabase200ApplicationJSONPropertiesPublisherSelectOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesPublisher:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[RetrieveADatabase200ApplicationJSONPropertiesPublisherSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesPublishingReleaseDate:
    date: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesRead:
    checkbox: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkbox' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesScore5SelectOptions:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesScore5Select:
    options: Optional[List[RetrieveADatabase200ApplicationJSONPropertiesScore5SelectOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesScore5:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[RetrieveADatabase200ApplicationJSONPropertiesScore5Select] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesStatusSelectOptions:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesStatusSelect:
    options: Optional[List[RetrieveADatabase200ApplicationJSONPropertiesStatusSelectOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesStatus:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[RetrieveADatabase200ApplicationJSONPropertiesStatusSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesSummary:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    text: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesTypeSelectOptions:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesTypeSelect:
    options: Optional[List[RetrieveADatabase200ApplicationJSONPropertiesTypeSelectOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONPropertiesType:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[RetrieveADatabase200ApplicationJSONPropertiesTypeSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONProperties:
    author: Optional[RetrieveADatabase200ApplicationJSONPropertiesAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Author' }})
    link: Optional[RetrieveADatabase200ApplicationJSONPropertiesLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Link' }})
    name: Optional[RetrieveADatabase200ApplicationJSONPropertiesName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    publisher: Optional[RetrieveADatabase200ApplicationJSONPropertiesPublisher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Publisher' }})
    publishing_release_date: Optional[RetrieveADatabase200ApplicationJSONPropertiesPublishingReleaseDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Publishing/Release Date' }})
    read: Optional[RetrieveADatabase200ApplicationJSONPropertiesRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Read' }})
    score_5: Optional[RetrieveADatabase200ApplicationJSONPropertiesScore5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score /5' }})
    status: Optional[RetrieveADatabase200ApplicationJSONPropertiesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    summary: Optional[RetrieveADatabase200ApplicationJSONPropertiesSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    type: Optional[RetrieveADatabase200ApplicationJSONPropertiesType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONTitleAnnotations:
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bold' }})
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italic' }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethrough' }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underline' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONTitleText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    link: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSONTitle:
    annotations: Optional[RetrieveADatabase200ApplicationJSONTitleAnnotations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    href: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plain_text' }})
    text: Optional[RetrieveADatabase200ApplicationJSONTitleText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveADatabase200ApplicationJSON:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_edited_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_edited_time' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    properties: Optional[RetrieveADatabase200ApplicationJSONProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    title: Optional[List[RetrieveADatabase200ApplicationJSONTitle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class RetrieveADatabaseResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    retrieve_a_database_200_application_json_object: Optional[RetrieveADatabase200ApplicationJSON] = field(default=None)
    
