from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import x509extension
from . import caoptions
from . import keyusage
from . import objectid


@dataclass_json
@dataclass
class ReusableConfigValues:
    additional_extensions: Optional[List[x509extension.X509Extension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalExtensions' }})
    aia_ocsp_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aiaOcspServers' }})
    ca_options: Optional[caoptions.CaOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caOptions' }})
    key_usage: Optional[keyusage.KeyUsage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyUsage' }})
    policy_ids: Optional[List[objectid.ObjectID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyIds' }})
    
