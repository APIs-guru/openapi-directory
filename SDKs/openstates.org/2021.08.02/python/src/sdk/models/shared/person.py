from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Person:
    birth_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('birth_date') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    death_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('death_date') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    extras: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extras') }})
    family_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('family_name') }})
    gender: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    given_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('given_name') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    jurisdiction: CompactJurisdiction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdiction') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    openstates_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openstates_url') }})
    party: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_role: Optional[CurrentRole] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_role') }})
    links: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    offices: Optional[List[Office]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offices') }})
    other_identifiers: Optional[List[AltIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_identifiers') }})
    other_names: Optional[List[AltName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_names') }})
    sources: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
