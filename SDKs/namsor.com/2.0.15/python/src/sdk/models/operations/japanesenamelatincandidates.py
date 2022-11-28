from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameLatinCandidatesPathParams:
    japanese_given_name_kanji: str = field(metadata={'path_param': { 'field_name': 'japaneseGivenNameKanji', 'style': 'simple', 'explode': False }})
    japanese_surname_kanji: str = field(metadata={'path_param': { 'field_name': 'japaneseSurnameKanji', 'style': 'simple', 'explode': False }})
    

@dataclass
class JapaneseNameLatinCandidatesSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameLatinCandidatesRequest:
    path_params: JapaneseNameLatinCandidatesPathParams = field()
    security: JapaneseNameLatinCandidatesSecurity = field()
    

@dataclass
class JapaneseNameLatinCandidatesResponse:
    content_type: str = field()
    status_code: int = field()
    name_match_candidates_out: Optional[shared.NameMatchCandidatesOut] = field(default=None)
    
