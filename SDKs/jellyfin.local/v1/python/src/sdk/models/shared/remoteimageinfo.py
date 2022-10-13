from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ratingtype_enum
from . import imagetype_enum


@dataclass_json
@dataclass
class RemoteImageInfo:
    community_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommunityRating' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Language' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderName' }})
    rating_type: Optional[ratingtype_enum.RatingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RatingType' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbnailUrl' }})
    type: Optional[imagetype_enum.ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    vote_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoteCount' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    
