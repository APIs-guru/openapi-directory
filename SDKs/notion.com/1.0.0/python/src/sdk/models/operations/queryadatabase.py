from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class QueryADatabasePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class QueryADatabaseRequestBodyFilterOrSelect:
    equals: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equals') }})
    

@dataclass_json
@dataclass
class QueryADatabaseRequestBodyFilterOr:
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    select: Optional[QueryADatabaseRequestBodyFilterOrSelect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    

@dataclass_json
@dataclass
class QueryADatabaseRequestBodyFilter:
    or_: Optional[List[QueryADatabaseRequestBodyFilterOr]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('or') }})
    

@dataclass_json
@dataclass
class QueryADatabaseRequestBodySorts:
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    

@dataclass_json
@dataclass
class QueryADatabaseRequestBody:
    filter: Optional[QueryADatabaseRequestBodyFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    sorts: Optional[List[QueryADatabaseRequestBodySorts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sorts') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsParent:
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_id') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesAuthorMultiSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesAuthor:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    multi_select: Optional[List[QueryADatabase200ApplicationJSONResultsPropertiesAuthorMultiSelect]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multi_select') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesLink:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesNameTitleAnnotations:
    bold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bold') }})
    code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    italic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('italic') }})
    strikethrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strikethrough') }})
    underline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underline') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesNameTitleText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    link: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesNameTitle:
    annotations: Optional[QueryADatabase200ApplicationJSONResultsPropertiesNameTitleAnnotations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    href: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    plain_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plain_text') }})
    text: Optional[QueryADatabase200ApplicationJSONResultsPropertiesNameTitleText] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesName:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[List[QueryADatabase200ApplicationJSONResultsPropertiesNameTitle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesPublisherSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesPublisher:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[QueryADatabase200ApplicationJSONResultsPropertiesPublisherSelect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDateDate:
    end: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDate:
    date_: Optional[QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDateDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesRead:
    checkbox: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkbox') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesScore5Select:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesScore5:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[QueryADatabase200ApplicationJSONResultsPropertiesScore5Select] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesStatusSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesStatus:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[QueryADatabase200ApplicationJSONResultsPropertiesStatusSelect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesSummary:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    text: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesTypeSelect:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesType:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[QueryADatabase200ApplicationJSONResultsPropertiesTypeSelect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResultsProperties:
    author: Optional[QueryADatabase200ApplicationJSONResultsPropertiesAuthor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Author') }})
    link: Optional[QueryADatabase200ApplicationJSONResultsPropertiesLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    name: Optional[QueryADatabase200ApplicationJSONResultsPropertiesName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    publisher: Optional[QueryADatabase200ApplicationJSONResultsPropertiesPublisher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Publisher') }})
    publishing_release_date: Optional[QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Publishing/Release Date') }})
    read: Optional[QueryADatabase200ApplicationJSONResultsPropertiesRead] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Read') }})
    score_5: Optional[QueryADatabase200ApplicationJSONResultsPropertiesScore5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score /5') }})
    status: Optional[QueryADatabase200ApplicationJSONResultsPropertiesStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    summary: Optional[QueryADatabase200ApplicationJSONResultsPropertiesSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    type: Optional[QueryADatabase200ApplicationJSONResultsPropertiesType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSONResults:
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_edited_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_edited_time') }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    parent: Optional[QueryADatabase200ApplicationJSONResultsParent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    properties: Optional[QueryADatabase200ApplicationJSONResultsProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclass_json
@dataclass
class QueryADatabase200ApplicationJSON:
    has_more: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_more') }})
    next_cursor: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_cursor') }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    results: Optional[List[QueryADatabase200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class QueryADatabaseRequest:
    path_params: QueryADatabasePathParams = field()
    request: Optional[QueryADatabaseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QueryADatabaseResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    query_a_database_200_application_json_object: Optional[QueryADatabase200ApplicationJSON] = field(default=None)
    
