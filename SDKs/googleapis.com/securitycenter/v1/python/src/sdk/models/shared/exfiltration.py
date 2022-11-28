from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Exfiltration:
    r"""Exfiltration
    Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.
    """
    
    sources: Optional[List[ExfilResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    targets: Optional[List[ExfilResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    
