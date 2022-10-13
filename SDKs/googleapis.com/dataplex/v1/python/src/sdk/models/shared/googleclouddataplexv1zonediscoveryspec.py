from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1zonediscoveryspeccsvoptions
from . import googleclouddataplexv1zonediscoveryspecjsonoptions


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ZoneDiscoverySpec:
    csv_options: Optional[googleclouddataplexv1zonediscoveryspeccsvoptions.GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csvOptions' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    exclude_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludePatterns' }})
    include_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includePatterns' }})
    json_options: Optional[googleclouddataplexv1zonediscoveryspecjsonoptions.GoogleCloudDataplexV1ZoneDiscoverySpecJSONOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonOptions' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    
