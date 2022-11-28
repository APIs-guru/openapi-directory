from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemoteSearchResult:
    album_artist: Optional[RemoteSearchResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlbumArtist') }})
    artists: Optional[List[RemoteSearchResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Artists') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUrl') }})
    index_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexNumber') }})
    index_number_end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexNumberEnd') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Overview') }})
    parent_index_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentIndexNumber') }})
    premiere_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PremiereDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    production_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductionYear') }})
    provider_ids: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderIds') }})
    search_provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchProviderName') }})
    
