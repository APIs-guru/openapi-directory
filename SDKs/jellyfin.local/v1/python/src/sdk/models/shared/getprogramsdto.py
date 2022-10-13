from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import imagetype_enum
from . import itemfields_enum


@dataclass_json
@dataclass
class GetProgramsDto:
    channel_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelIds' }})
    enable_image_types: Optional[List[imagetype_enum.ImageTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableImageTypes' }})
    enable_images: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableImages' }})
    enable_total_record_count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableTotalRecordCount' }})
    enable_user_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableUserData' }})
    fields: Optional[List[itemfields_enum.ItemFieldsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fields' }})
    genre_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GenreIds' }})
    genres: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Genres' }})
    has_aired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasAired' }})
    image_type_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageTypeLimit' }})
    is_airing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsAiring' }})
    is_kids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsKids' }})
    is_movie: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsMovie' }})
    is_news: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsNews' }})
    is_series: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsSeries' }})
    is_sports: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsSports' }})
    library_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LibrarySeriesId' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    max_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    min_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    min_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    series_timer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SeriesTimerId' }})
    sort_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortBy' }})
    sort_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartIndex' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
