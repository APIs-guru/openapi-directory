from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Iteration:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'created' }})
    domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainId' }, 'form': { 'field_name': 'domainId' }})
    exportable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportable' }, 'form': { 'field_name': 'exportable' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }, 'form': { 'field_name': 'id' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }, 'form': { 'field_name': 'isDefault' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'lastModified' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }, 'form': { 'field_name': 'name' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }, 'form': { 'field_name': 'projectId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }, 'form': { 'field_name': 'status' }})
    trained_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'trainedAt' }})
    
