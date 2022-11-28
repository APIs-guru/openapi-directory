from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ContestLevelEnum(str, Enum):
    INTERNATIONAL = "international"
    COUNTRY = "country"
    ADMINISTRATIVE_AREA1 = "administrativeArea1"
    REGIONAL = "regional"
    ADMINISTRATIVE_AREA2 = "administrativeArea2"
    LOCALITY = "locality"
    SUB_LOCALITY1 = "subLocality1"
    SUB_LOCALITY2 = "subLocality2"
    SPECIAL = "special"

class ContestRolesEnum(str, Enum):
    HEAD_OF_STATE = "headOfState"
    HEAD_OF_GOVERNMENT = "headOfGovernment"
    DEPUTY_HEAD_OF_GOVERNMENT = "deputyHeadOfGovernment"
    GOVERNMENT_OFFICER = "governmentOfficer"
    EXECUTIVE_COUNCIL = "executiveCouncil"
    LEGISLATOR_UPPER_BODY = "legislatorUpperBody"
    LEGISLATOR_LOWER_BODY = "legislatorLowerBody"
    HIGHEST_COURT_JUDGE = "highestCourtJudge"
    JUDGE = "judge"
    SCHOOL_BOARD = "schoolBoard"
    SPECIAL_PURPOSE_OFFICER = "specialPurposeOfficer"
    OTHER_ROLE = "otherRole"


@dataclass_json
@dataclass
class Contest:
    r"""Contest
    Information about a contest that appears on a voter's ballot.
    """
    
    ballot_placement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ballotPlacement') }})
    ballot_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ballotTitle') }})
    candidates: Optional[List[Candidate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidates') }})
    district: Optional[ElectoralDistrict] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district') }})
    electorate_specifications: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electorateSpecifications') }})
    level: Optional[List[ContestLevelEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    number_elected: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberElected') }})
    number_voting_for: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberVotingFor') }})
    office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('office') }})
    primary_parties: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryParties') }})
    primary_party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryParty') }})
    referendum_ballot_responses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referendumBallotResponses') }})
    referendum_brief: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referendumBrief') }})
    referendum_con_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referendumConStatement') }})
    referendum_effect_of_abstain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referendumEffectOfAbstain') }})
    referendum_passage_threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referendumPassageThreshold') }})
    referendum_pro_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referendumProStatement') }})
    referendum_subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referendumSubtitle') }})
    referendum_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referendumText') }})
    referendum_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referendumTitle') }})
    referendum_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referendumUrl') }})
    roles: Optional[List[ContestRolesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    sources: Optional[List[Source]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    special: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('special') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
