from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import developermetadata


@dataclass_json
@dataclass
class UpdateDeveloperMetadataResponse:
    developer_metadata: Optional[List[developermetadata.DeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerMetadata' }})
    
