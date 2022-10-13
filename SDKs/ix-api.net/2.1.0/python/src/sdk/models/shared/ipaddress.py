from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPAddress:
    address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    consuming_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fqdn' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    managing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    prefix_length: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix_length' }})
    valid_not_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid_not_after', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    valid_not_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid_not_before', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
