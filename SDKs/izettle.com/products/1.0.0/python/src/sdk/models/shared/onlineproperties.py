from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OnlinePropertiesStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    HIDDEN = "HIDDEN"


@dataclass_json
@dataclass
class OnlineProperties:
    status: OnlinePropertiesStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    presentation: Optional[Presentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentation') }})
    seo: Optional[SearchEngineOptimization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seo') }})
    shipping: Optional[Shipping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
