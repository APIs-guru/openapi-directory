from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ChineseNameCandidatesPathParams:
    chinese_given_name_latin: str = field(metadata={'path_param': { 'field_name': 'chineseGivenNameLatin', 'style': 'simple', 'explode': False }})
    chinese_surname_latin: str = field(metadata={'path_param': { 'field_name': 'chineseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChineseNameCandidatesSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ChineseNameCandidatesRequest:
    path_params: ChineseNameCandidatesPathParams = field()
    security: ChineseNameCandidatesSecurity = field()
    

@dataclass
class ChineseNameCandidatesResponse:
    content_type: str = field()
    status_code: int = field()
    name_match_candidates_out: Optional[shared.NameMatchCandidatesOut] = field(default=None)
    
