from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FileUpdateInputAccessEnum(str, Enum):
    PUBLIC_INDEXABLE = "PUBLIC_INDEXABLE"
    PUBLIC_NOT_INDEXABLE = "PUBLIC_NOT_INDEXABLE"
    HIDDEN_INDEXABLE = "HIDDEN_INDEXABLE"
    HIDDEN_NOT_INDEXABLE = "HIDDEN_NOT_INDEXABLE"
    HIDDEN_PRIVATE = "HIDDEN_PRIVATE"
    PRIVATE = "PRIVATE"


@dataclass_json
@dataclass
class FileUpdateInput:
    r"""FileUpdateInput
    Object for updating files.
    """
    
    access: Optional[FileUpdateInputAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    is_usable_in_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUsableInContent') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentFolderId') }})
    parent_folder_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentFolderPath') }})
    
