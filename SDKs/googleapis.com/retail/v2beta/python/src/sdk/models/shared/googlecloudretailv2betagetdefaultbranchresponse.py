from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaGetDefaultBranchResponse:
    r"""GoogleCloudRetailV2betaGetDefaultBranchResponse
    Response message of CatalogService.GetDefaultBranch.
    """
    
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    set_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setTime') }})
    
