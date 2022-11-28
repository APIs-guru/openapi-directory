from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ItemContentContentFormatEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    HTML = "HTML"
    TEXT = "TEXT"
    RAW = "RAW"


@dataclass_json
@dataclass
class ItemContent:
    r"""ItemContent
    Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.
    """
    
    content_data_ref: Optional[UploadItemRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDataRef') }})
    content_format: Optional[ItemContentContentFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentFormat') }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    inline_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineContent') }})
    
