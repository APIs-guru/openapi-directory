from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubordinateConfigChain:
    r"""SubordinateConfigChain
    This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
    """
    
    pem_certificates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCertificates') }})
    
