from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hash


@dataclass_json
@dataclass
class FileHashes:
    file_hash: Optional[List[hash.Hash]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileHash' }})
    
