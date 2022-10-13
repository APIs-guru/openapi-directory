from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameKanjiCandidates1PathParams:
    japanese_given_name_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclass
class JapaneseNameKanjiCandidates1Security:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameKanjiCandidates1Request:
    path_params: JapaneseNameKanjiCandidates1PathParams = field(default=None)
    security: JapaneseNameKanjiCandidates1Security = field(default=None)
    

@dataclass
class JapaneseNameKanjiCandidates1Response:
    content_type: str = field(default=None)
    name_match_candidates_out: Optional[shared.NameMatchCandidatesOut] = field(default=None)
    status_code: int = field(default=None)
    
