from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matcheddevelopermetadata


@dataclass_json
@dataclass
class SearchDeveloperMetadataResponse:
    matched_developer_metadata: Optional[List[matcheddevelopermetadata.MatchedDeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedDeveloperMetadata' }})
    
