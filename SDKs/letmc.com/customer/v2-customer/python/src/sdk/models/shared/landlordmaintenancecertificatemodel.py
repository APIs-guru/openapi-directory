from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lettingslandlorddocument


@dataclass_json
@dataclass
class LandlordMaintenanceCertificateModel:
    due: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Due', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    files: Optional[List[lettingslandlorddocument.LettingsLandlordDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Files' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
