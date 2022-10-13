from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sourcecontext
from . import sourcecontext
from . import filehashes


@dataclass_json
@dataclass
class Source:
    additional_contexts: Optional[List[sourcecontext.SourceContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalContexts' }})
    artifact_storage_source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactStorageSourceUri' }})
    context: Optional[sourcecontext.SourceContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    file_hashes: Optional[dict[str, filehashes.FileHashes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileHashes' }})
    
