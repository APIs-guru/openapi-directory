from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope:
    include_gcp_public_datasets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeGcpPublicDatasets' }})
    include_org_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeOrgIds' }})
    include_project_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeProjectIds' }})
    restricted_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedLocations' }})
    
