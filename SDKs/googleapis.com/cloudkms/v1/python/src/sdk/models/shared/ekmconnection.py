from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EkmConnectionInput:
    r"""EkmConnectionInput
    An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    service_resolvers: Optional[List[ServiceResolverInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceResolvers') }})
    

@dataclass_json
@dataclass
class EkmConnection:
    r"""EkmConnection
    An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_resolvers: Optional[List[ServiceResolver]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceResolvers') }})
    
