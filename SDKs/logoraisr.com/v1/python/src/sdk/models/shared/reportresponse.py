from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import result


@dataclass_json
@dataclass
class ReportResponse:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_id' }})
    processing_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_algorithm' }})
    report_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_number' }})
    result: Optional[result.Result] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
