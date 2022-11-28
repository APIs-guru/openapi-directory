from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DestroySecretVersionRequest:
    r"""DestroySecretVersionRequest
    Request message for SecretManagerService.DestroySecretVersion.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    
