from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import candidate
from . import electoraldistrict
from . import source

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
    ballot_placement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ballotPlacement' }})
    ballot_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ballotTitle' }})
    candidates: Optional[List[candidate.Candidate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidates' }})
    district: Optional[electoraldistrict.ElectoralDistrict] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district' }})
    electorate_specifications: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electorateSpecifications' }})
    level: Optional[List[ContestLevelEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    number_elected: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberElected' }})
    number_voting_for: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberVotingFor' }})
    office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'office' }})
    primary_parties: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryParties' }})
    primary_party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryParty' }})
    referendum_ballot_responses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referendumBallotResponses' }})
    referendum_brief: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referendumBrief' }})
    referendum_con_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referendumConStatement' }})
    referendum_effect_of_abstain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referendumEffectOfAbstain' }})
    referendum_passage_threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referendumPassageThreshold' }})
    referendum_pro_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referendumProStatement' }})
    referendum_subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referendumSubtitle' }})
    referendum_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referendumText' }})
    referendum_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referendumTitle' }})
    referendum_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referendumUrl' }})
    roles: Optional[List[ContestRolesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    sources: Optional[List[source.Source]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    special: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'special' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
