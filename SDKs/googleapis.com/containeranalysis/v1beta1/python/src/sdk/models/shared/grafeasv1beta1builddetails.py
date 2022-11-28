from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrafeasV1beta1BuildDetails:
    r"""GrafeasV1beta1BuildDetails
    Details of a build occurrence.
    """
    
    provenance: Optional[BuildProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    provenance_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenanceBytes') }})
    
