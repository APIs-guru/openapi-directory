from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simpleaddresstype
from . import electionofficial
from . import simpleaddresstype


@dataclass_json
@dataclass
class AdministrativeBody:
    absentee_voting_info_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absenteeVotingInfoUrl' }})
    ballot_info_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ballotInfoUrl' }})
    correspondence_address: Optional[simpleaddresstype.SimpleAddressType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correspondenceAddress' }})
    election_info_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionInfoUrl' }})
    election_notice_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionNoticeText' }})
    election_notice_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionNoticeUrl' }})
    election_officials: Optional[List[electionofficial.ElectionOfficial]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionOfficials' }})
    election_registration_confirmation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionRegistrationConfirmationUrl' }})
    election_registration_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionRegistrationUrl' }})
    election_rules_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electionRulesUrl' }})
    hours_of_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hoursOfOperation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    physical_address: Optional[simpleaddresstype.SimpleAddressType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalAddress' }})
    voter_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voter_services' }})
    voting_location_finder_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'votingLocationFinderUrl' }})
    
