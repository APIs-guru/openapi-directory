from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObStatement2:
    r"""ObStatement2
    Provides further details on a statement resource.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: ObExternalStatementType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    statement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementId') }})
    statement_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementReference') }})
    
