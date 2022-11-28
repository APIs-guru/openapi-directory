from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Categories:
    r"""Categories
    The categories in a Lighthouse run.
    """
    
    accessibility: Optional[LighthouseCategoryV5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibility') }})
    best_practices: Optional[LighthouseCategoryV5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('best-practices') }})
    performance: Optional[LighthouseCategoryV5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performance') }})
    pwa: Optional[LighthouseCategoryV5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pwa') }})
    seo: Optional[LighthouseCategoryV5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seo') }})
    
