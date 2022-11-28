from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SecretPayload:
    r"""SecretPayload
    A secret payload resource in the Secret Manager API. This contains the sensitive secret data that is associated with a SecretVersion.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
