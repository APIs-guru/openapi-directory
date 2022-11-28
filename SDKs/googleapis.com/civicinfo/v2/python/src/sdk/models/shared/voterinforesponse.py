from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VoterInfoResponse:
    r"""VoterInfoResponse
    The result of a voter info lookup query.
    """
    
    contests: Optional[List[Contest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contests') }})
    drop_off_locations: Optional[List[PollingLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dropOffLocations') }})
    early_vote_sites: Optional[List[PollingLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earlyVoteSites') }})
    election: Optional[Election] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mail_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailOnly') }})
    normalized_input: Optional[SimpleAddressType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedInput') }})
    other_elections: Optional[List[Election]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherElections') }})
    polling_locations: Optional[List[PollingLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pollingLocations') }})
    precinct_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precinctId') }})
    precincts: Optional[List[Precinct]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precincts') }})
    state: Optional[List[AdministrationRegion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
