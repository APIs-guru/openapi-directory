from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppEngine:
    r"""AppEngine
    App Engine service. Learn more at https://cloud.google.com/appengine.
    """
    
    module_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moduleId') }})
    
