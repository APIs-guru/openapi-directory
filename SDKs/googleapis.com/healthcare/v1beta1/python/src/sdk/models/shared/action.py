from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
    Specifies a selection of tags and an `Action` to apply to each one.
    """
    
    clean_image_tag: Optional[ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleanImageTag') }})
    clean_text_tag: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleanTextTag') }})
    delete_tag: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTag') }})
    keep_tag: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepTag') }})
    queries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    recurse_tag: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurseTag') }})
    regen_uid_tag: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regenUidTag') }})
    remove_tag: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeTag') }})
    reset_tag: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetTag') }})
    
