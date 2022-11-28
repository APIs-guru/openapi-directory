from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPCookieEvidence:
    r"""HTTPCookieEvidence
    Evidence for HTTP cookie-related policy violations.
    """
    
    cookie_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieNames') }})
    max_cookie_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCookieCount') }})
    
