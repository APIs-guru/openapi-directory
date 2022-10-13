from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contest
from . import pollinglocation
from . import pollinglocation
from . import election
from . import simpleaddresstype
from . import election
from . import pollinglocation
from . import precinct
from . import administrationregion


@dataclass_json
@dataclass
class VoterInfoResponse:
    contests: Optional[List[contest.Contest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contests' }})
    drop_off_locations: Optional[List[pollinglocation.PollingLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dropOffLocations' }})
    early_vote_sites: Optional[List[pollinglocation.PollingLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earlyVoteSites' }})
    election: Optional[election.Election] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    mail_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailOnly' }})
    normalized_input: Optional[simpleaddresstype.SimpleAddressType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedInput' }})
    other_elections: Optional[List[election.Election]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherElections' }})
    polling_locations: Optional[List[pollinglocation.PollingLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pollingLocations' }})
    precinct_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precinctId' }})
    precincts: Optional[List[precinct.Precinct]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precincts' }})
    state: Optional[List[administrationregion.AdministrationRegion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
