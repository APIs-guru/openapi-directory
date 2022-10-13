from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import process


@dataclass_json
@dataclass
class Project:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_id' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    paypal_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paypal_payment_id' }})
    process: Optional[process.Process] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'process' }})
    process_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'process_id' }})
    project_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_number' }})
    project_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_title' }})
    result_file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_file_id' }})
    
