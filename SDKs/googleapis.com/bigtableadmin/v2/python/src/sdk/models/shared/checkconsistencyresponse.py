from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CheckConsistencyResponse:
    r"""CheckConsistencyResponse
    Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency
    """
    
    consistent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consistent') }})
    
