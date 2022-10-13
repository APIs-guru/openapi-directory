from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import license


@dataclass_json
@dataclass
class FileOccurrence:
    attributions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributions' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    contributors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributors' }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    files_license_info: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesLicenseInfo' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    license_concluded: Optional[license.License] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseConcluded' }})
    notice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notice' }})
    
