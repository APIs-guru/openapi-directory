from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlbumInfo:
    album_artists: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlbumArtists') }})
    artist_provider_ids: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtistProviderIds') }})
    index_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexNumber') }})
    is_automated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAutomated') }})
    metadata_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataCountryCode') }})
    metadata_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataLanguage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parent_index_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentIndexNumber') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    premiere_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PremiereDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    provider_ids: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderIds') }})
    song_infos: Optional[List[SongInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SongInfos') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Year') }})
    
