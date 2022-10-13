from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class RetrieveAPagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveAPageRequest:
    path_params: RetrieveAPagePathParams = field(default=None)
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONParent:
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database_id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesAuthorMultiSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesAuthor:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    multi_select: Optional[List[RetrieveAPage200ApplicationJSONPropertiesAuthorMultiSelect]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multi_select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesLink:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesNameTitleAnnotations:
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bold' }})
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italic' }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethrough' }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underline' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesNameTitleText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    link: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesNameTitle:
    annotations: Optional[RetrieveAPage200ApplicationJSONPropertiesNameTitleAnnotations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    href: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plain_text' }})
    text: Optional[RetrieveAPage200ApplicationJSONPropertiesNameTitleText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesName:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    title: Optional[List[RetrieveAPage200ApplicationJSONPropertiesNameTitle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesPublisherSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesPublisher:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[RetrieveAPage200ApplicationJSONPropertiesPublisherSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDateDate:
    end: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDate:
    date: Optional[RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDateDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesRead:
    checkbox: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkbox' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesStatusSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesStatus:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[RetrieveAPage200ApplicationJSONPropertiesStatusSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesSummaryTextAnnotations:
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bold' }})
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italic' }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethrough' }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underline' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesSummaryTextText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    link: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesSummaryText:
    annotations: Optional[RetrieveAPage200ApplicationJSONPropertiesSummaryTextAnnotations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    href: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plain_text' }})
    text: Optional[RetrieveAPage200ApplicationJSONPropertiesSummaryTextText] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesSummary:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    text: Optional[List[RetrieveAPage200ApplicationJSONPropertiesSummaryText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesTypeSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONPropertiesType:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    select: Optional[RetrieveAPage200ApplicationJSONPropertiesTypeSelect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'select' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSONProperties:
    author: Optional[RetrieveAPage200ApplicationJSONPropertiesAuthor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Author' }})
    link: Optional[RetrieveAPage200ApplicationJSONPropertiesLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Link' }})
    name: Optional[RetrieveAPage200ApplicationJSONPropertiesName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    publisher: Optional[RetrieveAPage200ApplicationJSONPropertiesPublisher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Publisher' }})
    publishing_release_date: Optional[RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Publishing/Release Date' }})
    read: Optional[RetrieveAPage200ApplicationJSONPropertiesRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Read' }})
    status: Optional[RetrieveAPage200ApplicationJSONPropertiesStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    summary: Optional[RetrieveAPage200ApplicationJSONPropertiesSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    type: Optional[RetrieveAPage200ApplicationJSONPropertiesType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class RetrieveAPage200ApplicationJSON:
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_edited_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_edited_time' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    parent: Optional[RetrieveAPage200ApplicationJSONParent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    properties: Optional[RetrieveAPage200ApplicationJSONProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    

@dataclass
class RetrieveAPageResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    retrieve_a_page_200_application_json_object: Optional[RetrieveAPage200ApplicationJSON] = field(default=None)
    
