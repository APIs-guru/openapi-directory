from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
    Response from searching fact-checked claims.
    """
    
    claims: Optional[List[GoogleFactcheckingFactchecktoolsV1alpha1Claim]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claims') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
