from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import packagedata


@dataclass_json
@dataclass
class AnalyzePackagesRequestV1:
    include_osv_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeOsvData' }})
    packages: Optional[List[packagedata.PackageData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages' }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUri' }})
    
