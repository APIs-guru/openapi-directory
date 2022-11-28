from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KerberosConfig:
    r"""KerberosConfig
    Configuration information for a Kerberos principal.
    """
    
    keytab: Optional[Secret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keytab') }})
    krb5_config_gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('krb5ConfigGcsUri') }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    
