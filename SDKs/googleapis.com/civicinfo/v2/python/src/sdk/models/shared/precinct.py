from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Precinct:
    administration_region_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('administrationRegionId') }})
    contest_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contestId') }})
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetId') }})
    early_vote_site_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earlyVoteSiteId') }})
    electoral_district_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electoralDistrictId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mail_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailOnly') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    ocd_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ocdId') }})
    polling_location_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pollingLocationId') }})
    spatial_boundary_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spatialBoundaryId') }})
    split_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splitName') }})
    ward: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ward') }})
    
