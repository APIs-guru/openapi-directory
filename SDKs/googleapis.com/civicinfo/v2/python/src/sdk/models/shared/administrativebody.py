from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdministrativeBody:
    r"""AdministrativeBody
    Information about an election administrative body (e.g. County Board of Elections).
    """
    
    absentee_voting_info_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absenteeVotingInfoUrl') }})
    ballot_info_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ballotInfoUrl') }})
    correspondence_address: Optional[SimpleAddressType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correspondenceAddress') }})
    election_info_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electionInfoUrl') }})
    election_notice_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electionNoticeText') }})
    election_notice_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electionNoticeUrl') }})
    election_officials: Optional[List[ElectionOfficial]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electionOfficials') }})
    election_registration_confirmation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electionRegistrationConfirmationUrl') }})
    election_registration_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electionRegistrationUrl') }})
    election_rules_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electionRulesUrl') }})
    hours_of_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hoursOfOperation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    physical_address: Optional[SimpleAddressType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalAddress') }})
    voter_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voter_services') }})
    voting_location_finder_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('votingLocationFinderUrl') }})
    
