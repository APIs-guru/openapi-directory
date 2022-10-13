from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    access: ImportFromURLInputAccessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    duplicate_validation_scope: ImportFromURLInputDuplicateValidationScopeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicateValidationScope' }})
    duplicate_validation_strategy: ImportFromURLInputDuplicateValidationStrategyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicateValidationStrategy' }})
    folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folderId' }})
    folder_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folderPath' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    overwrite: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overwrite' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
