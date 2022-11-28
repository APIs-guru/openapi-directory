from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildDetails:
    r"""BuildDetails
    Message encapsulating build provenance details.
    """
    
    intoto_provenance: Optional[InTotoProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intotoProvenance') }})
    intoto_statement: Optional[InTotoStatement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intotoStatement') }})
    provenance: Optional[BuildProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    provenance_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenanceBytes') }})
    
