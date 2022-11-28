from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchDeveloperMetadataResponse:
    r"""SearchDeveloperMetadataResponse
    A reply to a developer metadata search request.
    """
    
    matched_developer_metadata: Optional[List[MatchedDeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedDeveloperMetadata') }})
    
