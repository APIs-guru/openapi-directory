from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import secret


@dataclass_json
@dataclass
class KerberosConfig:
    keytab: Optional[secret.Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keytab' }})
    krb5_config_gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'krb5ConfigGcsUri' }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principal' }})
    
