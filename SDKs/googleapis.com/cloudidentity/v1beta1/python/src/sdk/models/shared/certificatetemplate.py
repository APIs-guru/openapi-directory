from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CertificateTemplate:
    r"""CertificateTemplate
    CertificateTemplate (v3 Extension in X.509).
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    major_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    minor_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minorVersion') }})
    
