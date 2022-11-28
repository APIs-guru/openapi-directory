from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SslConfigTypeEnum(str, Enum):
    SSL_TYPE_UNSPECIFIED = "SSL_TYPE_UNSPECIFIED"
    SERVER_ONLY = "SERVER_ONLY"
    SERVER_CLIENT = "SERVER_CLIENT"


@dataclass_json
@dataclass
class SslConfigInput:
    r"""SslConfigInput
    SSL configuration information.
    """
    
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificate') }})
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificate') }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientKey') }})
    

@dataclass_json
@dataclass
class SslConfig:
    r"""SslConfig
    SSL configuration information.
    """
    
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificate') }})
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificate') }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientKey') }})
    type: Optional[SslConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
