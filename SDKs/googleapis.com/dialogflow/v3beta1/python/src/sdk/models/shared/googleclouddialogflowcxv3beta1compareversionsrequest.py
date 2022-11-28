from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1CompareVersionsRequest:
    r"""GoogleCloudDialogflowCxV3beta1CompareVersionsRequest
    The request message for Versions.CompareVersions.
    """
    
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    target_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetVersion') }})
    
