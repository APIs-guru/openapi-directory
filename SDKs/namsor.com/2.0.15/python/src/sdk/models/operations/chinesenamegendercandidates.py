from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChineseNameGenderCandidatesPathParams:
    chinese_given_name_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseGivenNameLatin', 'style': 'simple', 'explode': False }})
    chinese_surname_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseSurnameLatin', 'style': 'simple', 'explode': False }})
    known_gender: str = field(default=None, metadata={'path_param': { 'field_name': 'knownGender', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChineseNameGenderCandidatesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ChineseNameGenderCandidatesRequest:
    path_params: ChineseNameGenderCandidatesPathParams = field(default=None)
    security: ChineseNameGenderCandidatesSecurity = field(default=None)
    

@dataclass
class ChineseNameGenderCandidatesResponse:
    content_type: str = field(default=None)
    name_match_candidates_out: Optional[shared.NameMatchCandidatesOut] = field(default=None)
    status_code: int = field(default=None)
    
