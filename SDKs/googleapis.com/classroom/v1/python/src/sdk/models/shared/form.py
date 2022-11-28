from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Form:
    r"""Form
    Google Forms item.
    """
    
    form_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formUrl') }})
    response_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseUrl') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
