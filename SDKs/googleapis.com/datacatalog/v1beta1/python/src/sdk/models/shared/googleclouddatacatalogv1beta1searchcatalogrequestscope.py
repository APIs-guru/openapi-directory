from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope:
    r"""GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope
    The criteria that select the subspace used for query matching.
    """
    
    include_gcp_public_datasets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeGcpPublicDatasets') }})
    include_org_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeOrgIds') }})
    include_project_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeProjectIds') }})
    restricted_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedLocations') }})
    
