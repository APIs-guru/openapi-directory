from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VMImage:
    r"""VMImage
    Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
    """
    
    image_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageFamily') }})
    image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageName') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    
