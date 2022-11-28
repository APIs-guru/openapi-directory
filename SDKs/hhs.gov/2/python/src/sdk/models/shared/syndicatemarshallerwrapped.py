from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SyndicateMarshallerWrapped:
    callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[List[SyndicateMarshaller]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
