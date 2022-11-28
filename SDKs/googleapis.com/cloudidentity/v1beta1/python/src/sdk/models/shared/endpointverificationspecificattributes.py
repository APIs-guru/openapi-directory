from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointVerificationSpecificAttributes:
    r"""EndpointVerificationSpecificAttributes
    Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview
    """
    
    certificate_attributes: Optional[List[CertificateAttributes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAttributes') }})
    
