from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GcsSource:
    r"""GcsSource
    The Google Cloud Storage location for the input content.
    """
    
    input_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputUri') }})
    
