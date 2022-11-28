from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GenerateConsistencyTokenResponse:
    r"""GenerateConsistencyTokenResponse
    Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken
    """
    
    consistency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consistencyToken') }})
    
