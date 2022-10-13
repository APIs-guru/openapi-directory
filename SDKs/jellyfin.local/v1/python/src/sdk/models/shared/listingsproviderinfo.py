from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namevaluepair


@dataclass_json
@dataclass
class ListingsProviderInfo:
    channel_mappings: Optional[List[namevaluepair.NameValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelMappings' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    enable_all_tuners: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAllTuners' }})
    enabled_tuners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnabledTuners' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    kids_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KidsCategories' }})
    listings_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListingsId' }})
    movie_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MovieCategories' }})
    movie_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MoviePrefix' }})
    news_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewsCategories' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    preferred_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredLanguage' }})
    sports_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SportsCategories' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserAgent' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    zip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZipCode' }})
    
