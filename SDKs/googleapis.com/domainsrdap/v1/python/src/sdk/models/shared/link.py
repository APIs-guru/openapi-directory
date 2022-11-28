from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Link:
    r"""Link
    Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    hreflang: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hreflang') }})
    media: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rel') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
