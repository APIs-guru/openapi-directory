from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import packagedata


@dataclass_json
@dataclass
class AnalyzePackagesRequest:
    packages: Optional[List[packagedata.PackageData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages' }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUri' }})
    
