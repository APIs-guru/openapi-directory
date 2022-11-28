from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1UploadPolicyFileResponse:
    r"""GoogleChromePolicyVersionsV1UploadPolicyFileResponse
    Response message for downloading an uploaded file.
    """
    
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUri') }})
    
