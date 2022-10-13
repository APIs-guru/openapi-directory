from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import throttlingsettings


@dataclass_json
@dataclass
class SettingsResponse:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetUrl' }})
    throttling: throttlingsettings.ThrottlingSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttling' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
