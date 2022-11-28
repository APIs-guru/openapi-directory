from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReusableConfigValues:
    r"""ReusableConfigValues
    A ReusableConfigValues is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
    """
    
    additional_extensions: Optional[List[X509Extension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalExtensions') }})
    aia_ocsp_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aiaOcspServers') }})
    ca_options: Optional[CaOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caOptions') }})
    key_usage: Optional[KeyUsage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyUsage') }})
    policy_ids: Optional[List[ObjectID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyIds') }})
    
