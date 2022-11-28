from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContainerImage:
    r"""ContainerImage
    Definition of a container image for starting a notebook instance with the environment installed in a container.
    """
    
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
