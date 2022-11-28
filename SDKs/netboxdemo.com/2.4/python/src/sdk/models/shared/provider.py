from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProviderInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    admin_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin_contact') }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    noc_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noc_contact') }})
    portal_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portal_url') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclass
class Provider:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    admin_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin_contact') }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    created: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    noc_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noc_contact') }})
    portal_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portal_url') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
