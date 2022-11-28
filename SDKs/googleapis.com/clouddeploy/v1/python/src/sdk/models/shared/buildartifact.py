from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BuildArtifact:
    r"""BuildArtifact
    Description of an a image to use during Skaffold rendering.
    """
    
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
