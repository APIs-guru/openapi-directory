from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo:
    r"""GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo
    Information describing query expansion including whether expansion has occurred.
    """
    
    expanded_query: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expandedQuery') }})
    pinned_result_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinnedResultCount') }})
    
