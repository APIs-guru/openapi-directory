from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProjectSettingsClassificationTypeEnum(str, Enum):
    MULTICLASS = "Multiclass"
    MULTILABEL = "Multilabel"


@dataclass_json
@dataclass
class ProjectSettings:
    r"""ProjectSettings
    Represents settings associated with a project
    """
    
    classification_type: Optional[ProjectSettingsClassificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationType') }, 'form': { 'field_name': 'classificationType' }})
    domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainId') }, 'form': { 'field_name': 'domainId' }})
    
