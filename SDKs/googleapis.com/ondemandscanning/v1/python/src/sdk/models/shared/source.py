from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Source:
    r"""Source
    Source describes the location of the source used for the build.
    """
    
    additional_contexts: Optional[List[SourceContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalContexts') }})
    artifact_storage_source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactStorageSourceUri') }})
    context: Optional[SourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    file_hashes: Optional[dict[str, FileHashes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileHashes') }})
    
