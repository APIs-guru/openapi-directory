from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import version


@dataclass_json
@dataclass
class VersionInfo:
    version_number: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionNumber' }})
    changelog: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changelog' }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    repository_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryUrl' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUrl' }})
    target_abi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetAbi' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
