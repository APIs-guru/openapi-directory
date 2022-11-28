from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputConfig:
    r"""InputConfig
    Input configuration for BatchTranslateText request.
    """
    
    gcs_source: Optional[GcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    
