from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GdataDiffChecksumsResponse:
    r"""GdataDiffChecksumsResponse
    gdata
    """
    
    checksums_location: Optional[GdataCompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksumsLocation') }})
    chunk_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chunkSizeBytes') }})
    object_location: Optional[GdataCompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectLocation') }})
    object_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectSizeBytes') }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectVersion') }})
    
