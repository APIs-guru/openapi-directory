from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filehashes
from . import timespan


@dataclass_json
@dataclass
class UploadedMavenArtifact:
    file_hashes: Optional[filehashes.FileHashes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileHashes' }})
    push_timing: Optional[timespan.TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushTiming' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
