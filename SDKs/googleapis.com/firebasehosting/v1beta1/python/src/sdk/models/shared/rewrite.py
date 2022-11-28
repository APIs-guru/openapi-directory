from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Rewrite:
    r"""Rewrite
    A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
    """
    
    dynamic_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicLinks') }})
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('function') }})
    function_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionRegion') }})
    glob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glob') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    run: Optional[CloudRunRewrite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    
