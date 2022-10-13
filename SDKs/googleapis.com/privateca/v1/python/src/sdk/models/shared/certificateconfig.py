from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import publickey
from . import subjectconfig
from . import x509parameters


@dataclass_json
@dataclass
class CertificateConfig:
    public_key: Optional[publickey.PublicKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    subject_config: Optional[subjectconfig.SubjectConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectConfig' }})
    x509_config: Optional[x509parameters.X509Parameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x509Config' }})
    
