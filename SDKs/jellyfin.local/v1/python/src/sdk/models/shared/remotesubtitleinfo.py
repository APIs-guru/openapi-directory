from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoteSubtitleInfo:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Author' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    community_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommunityRating' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DownloadCount' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_hash_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsHashMatch' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderName' }})
    three_letter_iso_language_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThreeLetterISOLanguageName' }})
    
