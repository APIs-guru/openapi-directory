from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import license


@dataclass_json
@dataclass
class PackageInfoOccurrence:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    home_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homePage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    license_concluded: Optional[license.License] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseConcluded' }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageType' }})
    source_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceInfo' }})
    summary_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaryDescription' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
