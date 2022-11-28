from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GenerateDownloadURLResponse:
    r"""GenerateDownloadURLResponse
    Response of `GenerateDownloadUrl` method.
    """
    
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUrl') }})
    
