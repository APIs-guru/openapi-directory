from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import result


@dataclass_json
@dataclass
class Report:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_id' }})
    process_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'process_id' }})
    report_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_number' }})
    result: Optional[result.Result] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    result_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_id' }})
    
