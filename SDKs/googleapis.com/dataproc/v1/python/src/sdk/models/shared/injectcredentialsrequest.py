from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InjectCredentialsRequest:
    r"""InjectCredentialsRequest
    A request to inject credentials into a cluster.
    """
    
    cluster_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterUuid') }})
    credentials_ciphertext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialsCiphertext') }})
    
