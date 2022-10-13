from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import version
from . import version
from . import version


@dataclass_json
@dataclass
class Detail:
    affected_cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedCpeUri' }})
    affected_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedPackage' }})
    affected_version_end: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedVersionEnd' }})
    affected_version_start: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedVersionStart' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fixed_cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedCpeUri' }})
    fixed_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedPackage' }})
    fixed_version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedVersion' }})
    is_obsolete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isObsolete' }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageType' }})
    severity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severityName' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUpdateTime' }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor' }})
    
