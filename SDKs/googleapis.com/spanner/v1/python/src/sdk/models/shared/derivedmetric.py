from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import localizedstring
from . import localizedstring


@dataclass_json
@dataclass
class DerivedMetric:
    denominator: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denominator' }})
    numerator: Optional[localizedstring.LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numerator' }})
    
