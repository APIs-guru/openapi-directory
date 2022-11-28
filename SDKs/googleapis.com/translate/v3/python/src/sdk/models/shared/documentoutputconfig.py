from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentOutputConfig:
    r"""DocumentOutputConfig
    A document translation request output config.
    """
    
    gcs_destination: Optional[GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    
