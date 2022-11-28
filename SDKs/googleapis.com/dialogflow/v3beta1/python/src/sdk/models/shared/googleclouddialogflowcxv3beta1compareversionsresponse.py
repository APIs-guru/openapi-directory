from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1CompareVersionsResponse:
    r"""GoogleCloudDialogflowCxV3beta1CompareVersionsResponse
    The response message for Versions.CompareVersions.
    """
    
    base_version_content_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseVersionContentJson') }})
    compare_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compareTime') }})
    target_version_content_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetVersionContentJson') }})
    
