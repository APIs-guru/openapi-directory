from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1taskinfrastructurespec


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskNotebookTaskConfig:
    archive_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveUris' }})
    file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileUris' }})
    infrastructure_spec: Optional[googleclouddataplexv1taskinfrastructurespec.GoogleCloudDataplexV1TaskInfrastructureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureSpec' }})
    notebook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notebook' }})
    
