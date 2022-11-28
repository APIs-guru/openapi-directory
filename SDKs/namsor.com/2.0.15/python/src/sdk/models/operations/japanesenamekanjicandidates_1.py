from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameKanjiCandidates1PathParams:
    japanese_given_name_latin: str = field(metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = field(metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclass
class JapaneseNameKanjiCandidates1Security:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameKanjiCandidates1Request:
    path_params: JapaneseNameKanjiCandidates1PathParams = field()
    security: JapaneseNameKanjiCandidates1Security = field()
    

@dataclass
class JapaneseNameKanjiCandidates1Response:
    content_type: str = field()
    status_code: int = field()
    name_match_candidates_out: Optional[shared.NameMatchCandidatesOut] = field(default=None)
    
