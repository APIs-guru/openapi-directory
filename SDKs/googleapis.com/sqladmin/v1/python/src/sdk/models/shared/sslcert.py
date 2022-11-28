from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SslCert:
    r"""SslCert
    SslCerts Resource
    """
    
    cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cert') }})
    cert_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certSerialNumber') }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonName') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTime') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    sha1_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1Fingerprint') }})
    
