from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SandboxRetryCacheEntry:
    cache_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheKey' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    expiration_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
