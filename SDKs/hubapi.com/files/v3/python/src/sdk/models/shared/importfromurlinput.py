from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ImportFromURLInputAccessEnum(str, Enum):
    PUBLIC_INDEXABLE = "PUBLIC_INDEXABLE"
    PUBLIC_NOT_INDEXABLE = "PUBLIC_NOT_INDEXABLE"
    HIDDEN_INDEXABLE = "HIDDEN_INDEXABLE"
    HIDDEN_NOT_INDEXABLE = "HIDDEN_NOT_INDEXABLE"
    HIDDEN_PRIVATE = "HIDDEN_PRIVATE"
    PRIVATE = "PRIVATE"

class ImportFromURLInputDuplicateValidationScopeEnum(str, Enum):
    ENTIRE_PORTAL = "ENTIRE_PORTAL"
    EXACT_FOLDER = "EXACT_FOLDER"

class ImportFromURLInputDuplicateValidationStrategyEnum(str, Enum):
    NONE = "NONE"
    REJECT = "REJECT"
    RETURN_EXISTING = "RETURN_EXISTING"


@dataclass_json
@dataclass
class ImportFromURLInput:
    access: ImportFromURLInputAccessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    duplicate_validation_scope: ImportFromURLInputDuplicateValidationScopeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateValidationScope') }})
    duplicate_validation_strategy: ImportFromURLInputDuplicateValidationStrategyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicateValidationStrategy') }})
    overwrite: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('overwrite') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderId') }})
    folder_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderPath') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
