from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DerivedMetric:
    r"""DerivedMetric
    A message representing a derived metric.
    """
    
    denominator: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denominator') }})
    numerator: Optional[LocalizedString] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numerator') }})
    
