from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vulnerabilitylocation
from . import version
from . import version


@dataclass_json
@dataclass
class Detail:
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpeUri' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fixed_location: Optional[vulnerabilitylocation.VulnerabilityLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedLocation' }})
    is_obsolete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isObsolete' }})
    max_affected_version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAffectedVersion' }})
    min_affected_version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minAffectedVersion' }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageType' }})
    severity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severityName' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUpdateTime' }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor' }})
    
