from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameKanjiCandidatesPathParams:
    japanese_given_name_latin: str = field(metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = field(metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    known_gender: str = field(metadata={'path_param': { 'field_name': 'knownGender', 'style': 'simple', 'explode': False }})
    

@dataclass
class JapaneseNameKanjiCandidatesSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameKanjiCandidatesRequest:
    path_params: JapaneseNameKanjiCandidatesPathParams = field()
    security: JapaneseNameKanjiCandidatesSecurity = field()
    

@dataclass
class JapaneseNameKanjiCandidatesResponse:
    content_type: str = field()
    status_code: int = field()
    name_match_candidates_out: Optional[shared.NameMatchCandidatesOut] = field(default=None)
    
