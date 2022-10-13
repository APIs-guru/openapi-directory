from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import developermetadata


@dataclass_json
@dataclass
class CreateDeveloperMetadataResponse:
    developer_metadata: Optional[developermetadata.DeveloperMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerMetadata' }})
    
