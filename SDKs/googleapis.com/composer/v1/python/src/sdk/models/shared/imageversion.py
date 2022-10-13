from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import date


@dataclass_json
@dataclass
class ImageVersion:
    creation_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDisabled' }})
    image_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageVersionId' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }})
    release_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseDate' }})
    supported_python_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedPythonVersions' }})
    upgrade_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeDisabled' }})
    
