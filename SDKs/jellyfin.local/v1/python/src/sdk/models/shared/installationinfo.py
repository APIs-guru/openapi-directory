from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import version


@dataclass_json
@dataclass
class InstallationInfo:
    changelog: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Changelog' }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Checksum' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Guid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceUrl' }})
    version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
