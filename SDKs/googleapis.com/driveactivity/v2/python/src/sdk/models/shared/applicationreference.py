from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ApplicationReferenceTypeEnum(str, Enum):
    UNSPECIFIED_REFERENCE_TYPE = "UNSPECIFIED_REFERENCE_TYPE"
    LINK = "LINK"
    DISCUSS = "DISCUSS"


@dataclass_json
@dataclass
class ApplicationReference:
    r"""ApplicationReference
    Activity in applications other than Drive.
    """
    
    type: Optional[ApplicationReferenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
