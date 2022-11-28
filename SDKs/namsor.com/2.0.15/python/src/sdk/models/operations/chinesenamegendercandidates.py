from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ChineseNameGenderCandidatesPathParams:
    chinese_given_name_latin: str = field(metadata={'path_param': { 'field_name': 'chineseGivenNameLatin', 'style': 'simple', 'explode': False }})
    chinese_surname_latin: str = field(metadata={'path_param': { 'field_name': 'chineseSurnameLatin', 'style': 'simple', 'explode': False }})
    known_gender: str = field(metadata={'path_param': { 'field_name': 'knownGender', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChineseNameGenderCandidatesSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ChineseNameGenderCandidatesRequest:
    path_params: ChineseNameGenderCandidatesPathParams = field()
    security: ChineseNameGenderCandidatesSecurity = field()
    

@dataclass
class ChineseNameGenderCandidatesResponse:
    content_type: str = field()
    status_code: int = field()
    name_match_candidates_out: Optional[shared.NameMatchCandidatesOut] = field(default=None)
    
