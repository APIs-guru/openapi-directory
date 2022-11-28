from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VersionTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TYPE_PREVIEW = "TYPE_PREVIEW"
    TYPE_GENERAL_AVAILABILITY = "TYPE_GENERAL_AVAILABILITY"


@dataclass_json
@dataclass
class Version:
    r"""Version
    The Data Fusion version. This proto message stores information about certain Data Fusion version, which is used for Data Fusion version upgrade.
    """
    
    available_features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableFeatures') }})
    default_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultVersion') }})
    type: Optional[VersionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    
