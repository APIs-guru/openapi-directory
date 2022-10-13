from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import publickey
from . import reusableconfigwrapper
from . import subjectconfig


@dataclass_json
@dataclass
class CertificateConfig:
    public_key: Optional[publickey.PublicKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    reusable_config: Optional[reusableconfigwrapper.ReusableConfigWrapper] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reusableConfig' }})
    subject_config: Optional[subjectconfig.SubjectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectConfig' }})
    
