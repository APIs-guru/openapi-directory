from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1DefineCertificateRequest:
    r"""GoogleChromePolicyVersionsV1DefineCertificateRequest
    Request object for creating a certificate.
    """
    
    ceritificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ceritificateName') }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    settings: Optional[List[GoogleChromePolicyVersionsV1NetworkSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    target_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetResource') }})
    
