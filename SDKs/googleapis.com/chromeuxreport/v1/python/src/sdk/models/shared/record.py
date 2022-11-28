from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Record:
    r"""Record
    Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
    """
    
    collection_period: Optional[CollectionPeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionPeriod') }})
    key: Optional[Key] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    metrics: Optional[dict[str, Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
