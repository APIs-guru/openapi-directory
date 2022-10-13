from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProjectSettingsClassificationTypeEnum(str, Enum):
    MULTICLASS = "Multiclass"
    MULTILABEL = "Multilabel"


@dataclass_json
@dataclass
class ProjectSettings:
    classification_type: Optional[ProjectSettingsClassificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationType' }, 'form': { 'field_name': 'classificationType' }})
    domain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainId' }, 'form': { 'field_name': 'domainId' }})
    
