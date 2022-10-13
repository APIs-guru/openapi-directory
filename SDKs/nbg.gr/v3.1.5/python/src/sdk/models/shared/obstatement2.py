from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import obexternalstatementtype1code_enum


@dataclass_json
@dataclass
class ObStatement2:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    statement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementId' }})
    statement_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementReference' }})
    type: obexternalstatementtype1code_enum.ObExternalStatementType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
