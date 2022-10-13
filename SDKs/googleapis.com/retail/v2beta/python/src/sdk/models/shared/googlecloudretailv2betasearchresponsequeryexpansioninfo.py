from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo:
    expanded_query: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expandedQuery' }})
    pinned_result_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinnedResultCount' }})
    
