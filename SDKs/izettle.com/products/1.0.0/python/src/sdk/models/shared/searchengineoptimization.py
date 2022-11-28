from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SearchEngineOptimization:
    meta_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metaDescription') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
