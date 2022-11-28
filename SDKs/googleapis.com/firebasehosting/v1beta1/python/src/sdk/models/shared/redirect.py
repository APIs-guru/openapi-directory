from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Redirect:
    r"""Redirect
    A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
    """
    
    glob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glob') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    
