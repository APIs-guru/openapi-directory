from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class URLNormalization:
    r"""URLNormalization
    Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.
    """
    
    normalized_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedUrl') }})
    original_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalUrl') }})
    
