from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PagespeedAPILoadingExperienceV5:
    r"""PagespeedAPILoadingExperienceV5
    The CrUX loading experience object that contains CrUX data breakdowns.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initial_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_url') }})
    metrics: Optional[dict[str, UserPageLoadMetricV5]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    origin_fallback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin_fallback') }})
    overall_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall_category') }})
    
