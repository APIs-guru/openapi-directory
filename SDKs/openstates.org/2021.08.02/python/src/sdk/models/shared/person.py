from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import currentrole
from . import compactjurisdiction
from . import link
from . import office
from . import altidentifier
from . import altname
from . import link


@dataclass_json
@dataclass
class Person:
    birth_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birth_date' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_role: Optional[currentrole.CurrentRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_role' }})
    death_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'death_date' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    extras: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extras' }})
    family_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family_name' }})
    gender: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    given_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'given_name' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    jurisdiction: compactjurisdiction.CompactJurisdiction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jurisdiction' }})
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    offices: Optional[List[office.Office]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offices' }})
    openstates_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openstates_url' }})
    other_identifiers: Optional[List[altidentifier.AltIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'other_identifiers' }})
    other_names: Optional[List[altname.AltName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'other_names' }})
    party: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    sources: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
