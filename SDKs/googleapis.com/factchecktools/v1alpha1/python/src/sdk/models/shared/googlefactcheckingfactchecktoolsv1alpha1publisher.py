from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1Publisher:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1Publisher
    Information about the publisher.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    
