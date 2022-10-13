from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import suggestionclusterproto


@dataclass_json
@dataclass
class ListStepAccessibilityClustersResponse:
    clusters: Optional[List[suggestionclusterproto.SuggestionClusterProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
