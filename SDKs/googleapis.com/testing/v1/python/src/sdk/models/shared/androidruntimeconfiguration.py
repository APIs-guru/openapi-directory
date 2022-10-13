from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import locale
from . import orientation


@dataclass_json
@dataclass
class AndroidRuntimeConfiguration:
    locales: Optional[List[locale.Locale]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locales' }})
    orientations: Optional[List[orientation.Orientation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientations' }})
    
