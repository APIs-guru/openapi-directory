from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import localizedstringbundle
from . import localizedstringbundle
from . import localizedstringbundle
from . import localizedstringbundle
from . import localizedstringbundle
from . import localizedstringbundle


@dataclass_json
@dataclass
class GamesNumberAffixConfiguration:
    few: Optional[localizedstringbundle.LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'few' }})
    many: Optional[localizedstringbundle.LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'many' }})
    one: Optional[localizedstringbundle.LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'one' }})
    other: Optional[localizedstringbundle.LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'other' }})
    two: Optional[localizedstringbundle.LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'two' }})
    zero: Optional[localizedstringbundle.LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zero' }})
    
