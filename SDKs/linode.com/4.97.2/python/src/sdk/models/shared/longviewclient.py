from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LongviewClientApps:
    apache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apache' }})
    mysql: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysql' }})
    nginx: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nginx' }})
    

@dataclass_json
@dataclass
class LongviewClient:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_key' }})
    apps: Optional[LongviewClientApps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    install_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'install_code' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
