from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Link:
    r"""Link
    A reference to another portion of a document or an external URL resource.
    """
    
    bookmark_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookmarkId') }})
    heading_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headingId') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
