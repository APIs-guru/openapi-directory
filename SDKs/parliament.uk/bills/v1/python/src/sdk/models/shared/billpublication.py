from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BillPublication:
    display_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    files: Optional[List[PublicationDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    house: Optional[HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('house') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    links: Optional[List[PublicationLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    publication_type: Optional[PublicationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicationType') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
