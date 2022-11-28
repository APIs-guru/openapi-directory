from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EgressControlConfig:
    r"""EgressControlConfig
    Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource.
    """
    
    backends: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backends') }})
    extraction_rules: Optional[ExtractionRules] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractionRules') }})
    
