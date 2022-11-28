from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableCircuitInput:
    cid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    provider: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    commit_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_rate') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    install_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('install_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
