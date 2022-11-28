from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateConfig:
    r"""CertificateConfig
    A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
    """
    
    public_key: Optional[PublicKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    reusable_config: Optional[ReusableConfigWrapper] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reusableConfig') }})
    subject_config: Optional[SubjectConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectConfig') }})
    
