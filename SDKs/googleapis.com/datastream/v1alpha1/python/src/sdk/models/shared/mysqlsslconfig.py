from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MysqlSslConfig:
    r"""MysqlSslConfig
    MySQL SSL configuration information.
    """
    
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificate') }})
    ca_certificate_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificateSet') }})
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificate') }})
    client_certificate_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificateSet') }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientKey') }})
    client_key_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientKeySet') }})
    

@dataclass_json
@dataclass
class MysqlSslConfigInput:
    r"""MysqlSslConfigInput
    MySQL SSL configuration information.
    """
    
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificate') }})
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificate') }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientKey') }})
    
