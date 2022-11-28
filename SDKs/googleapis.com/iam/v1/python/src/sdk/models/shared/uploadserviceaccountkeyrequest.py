from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UploadServiceAccountKeyRequest:
    r"""UploadServiceAccountKeyRequest
    The service account key upload request.
    """
    
    public_key_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyData') }})
    
