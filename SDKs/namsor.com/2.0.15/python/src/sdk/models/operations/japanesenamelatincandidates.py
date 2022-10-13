from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameLatinCandidatesPathParams:
    japanese_given_name_kanji: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseGivenNameKanji', 'style': 'simple', 'explode': False }})
    japanese_surname_kanji: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseSurnameKanji', 'style': 'simple', 'explode': False }})
    

@dataclass
class JapaneseNameLatinCandidatesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameLatinCandidatesRequest:
    path_params: JapaneseNameLatinCandidatesPathParams = field(default=None)
    security: JapaneseNameLatinCandidatesSecurity = field(default=None)
    

@dataclass
class JapaneseNameLatinCandidatesResponse:
    content_type: str = field(default=None)
    name_match_candidates_out: Optional[shared.NameMatchCandidatesOut] = field(default=None)
    status_code: int = field(default=None)
    
