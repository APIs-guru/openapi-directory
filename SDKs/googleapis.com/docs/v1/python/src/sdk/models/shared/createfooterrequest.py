from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreateFooterRequestTypeEnum(str, Enum):
    HEADER_FOOTER_TYPE_UNSPECIFIED = "HEADER_FOOTER_TYPE_UNSPECIFIED"
    DEFAULT = "DEFAULT"


@dataclass_json
@dataclass
class CreateFooterRequest:
    r"""CreateFooterRequest
    Creates a Footer. The new footer is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a footer of the specified type already exists, a 400 bad request error is returned.
    """
    
    section_break_location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionBreakLocation') }})
    type: Optional[CreateFooterRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
