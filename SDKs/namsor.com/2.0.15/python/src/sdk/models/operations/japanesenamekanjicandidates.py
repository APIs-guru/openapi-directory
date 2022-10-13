from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameKanjiCandidatesPathParams:
    japanese_given_name_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    known_gender: str = field(default=None, metadata={'path_param': { 'field_name': 'knownGender', 'style': 'simple', 'explode': False }})
    

@dataclass
class JapaneseNameKanjiCandidatesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameKanjiCandidatesRequest:
    path_params: JapaneseNameKanjiCandidatesPathParams = field(default=None)
    security: JapaneseNameKanjiCandidatesSecurity = field(default=None)
    

@dataclass
class JapaneseNameKanjiCandidatesResponse:
    content_type: str = field(default=None)
    name_match_candidates_out: Optional[shared.NameMatchCandidatesOut] = field(default=None)
    status_code: int = field(default=None)
    
