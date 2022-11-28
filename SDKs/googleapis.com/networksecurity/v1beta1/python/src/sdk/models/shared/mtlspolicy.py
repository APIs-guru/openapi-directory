from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MtlsPolicy:
    r"""MtlsPolicy
    Specification of the MTLSPolicy.
    """
    
    client_validation_ca: Optional[List[ValidationCa]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientValidationCa') }})
    
