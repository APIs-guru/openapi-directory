from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PersonLookupInfo:
    index_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexNumber' }})
    is_automated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsAutomated' }})
    metadata_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataCountryCode' }})
    metadata_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataLanguage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parent_index_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentIndexNumber' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    premiere_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PremiereDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    provider_ids: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderIds' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Year' }})
    
