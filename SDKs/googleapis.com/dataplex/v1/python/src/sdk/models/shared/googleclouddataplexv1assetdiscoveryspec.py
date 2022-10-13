from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1assetdiscoveryspeccsvoptions
from . import googleclouddataplexv1assetdiscoveryspecjsonoptions


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetDiscoverySpec:
    csv_options: Optional[googleclouddataplexv1assetdiscoveryspeccsvoptions.GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csvOptions' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    exclude_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludePatterns' }})
    include_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includePatterns' }})
    json_options: Optional[googleclouddataplexv1assetdiscoveryspecjsonoptions.GoogleCloudDataplexV1AssetDiscoverySpecJSONOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonOptions' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    
