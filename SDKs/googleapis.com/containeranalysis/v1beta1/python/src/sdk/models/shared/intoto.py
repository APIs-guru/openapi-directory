from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InToto:
    r"""InToto
    This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.
    """
    
    expected_command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedCommand') }})
    expected_materials: Optional[List[ArtifactRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedMaterials') }})
    expected_products: Optional[List[ArtifactRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedProducts') }})
    signing_keys: Optional[List[SigningKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeys') }})
    step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepName') }})
    threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    
