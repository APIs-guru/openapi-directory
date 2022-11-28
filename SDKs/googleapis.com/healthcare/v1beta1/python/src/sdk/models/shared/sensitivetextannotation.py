from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SensitiveTextAnnotation:
    r"""SensitiveTextAnnotation
    A TextAnnotation specifies a text range that includes sensitive information.
    """
    
    details: Optional[dict[str, Detail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
