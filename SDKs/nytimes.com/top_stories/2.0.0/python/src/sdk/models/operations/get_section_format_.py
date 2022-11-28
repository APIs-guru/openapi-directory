from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetSectionFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"

class GetSectionFormatSectionEnum(str, Enum):
    HOME = "home"
    OPINION = "opinion"
    WORLD = "world"
    NATIONAL = "national"
    POLITICS = "politics"
    UPSHOT = "upshot"
    NYREGION = "nyregion"
    BUSINESS = "business"
    TECHNOLOGY = "technology"
    SCIENCE = "science"
    HEALTH = "health"
    SPORTS = "sports"
    ARTS = "arts"
    BOOKS = "books"
    MOVIES = "movies"
    THEATER = "theater"
    SUNDAYREVIEW = "sundayreview"
    FASHION = "fashion"
    TMAGAZINE = "tmagazine"
    FOOD = "food"
    TRAVEL = "travel"
    MAGAZINE = "magazine"
    REALESTATE = "realestate"
    AUTOMOBILES = "automobiles"
    OBITUARIES = "obituaries"
    INSIDER = "insider"


@dataclass
class GetSectionFormatPathParams:
    format: GetSectionFormatFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    section: GetSectionFormatSectionEnum = field(metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSectionFormatQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSectionFormat200ApplicationJSON:
    results: Optional[List[shared.Article]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class GetSectionFormatRequest:
    path_params: GetSectionFormatPathParams = field()
    query_params: GetSectionFormatQueryParams = field()
    

@dataclass
class GetSectionFormatResponse:
    content_type: str = field()
    status_code: int = field()
    get_section_format_200_application_json_object: Optional[GetSectionFormat200ApplicationJSON] = field(default=None)
    
