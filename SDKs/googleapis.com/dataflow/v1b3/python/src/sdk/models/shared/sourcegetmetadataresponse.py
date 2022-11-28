from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceGetMetadataResponse:
    r"""SourceGetMetadataResponse
    The result of a SourceGetMetadataOperation.
    """
    
    metadata: Optional[SourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
