from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChineseNameCandidatesPathParams:
    chinese_given_name_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseGivenNameLatin', 'style': 'simple', 'explode': False }})
    chinese_surname_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'chineseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChineseNameCandidatesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ChineseNameCandidatesRequest:
    path_params: ChineseNameCandidatesPathParams = field(default=None)
    security: ChineseNameCandidatesSecurity = field(default=None)
    

@dataclass
class ChineseNameCandidatesResponse:
    content_type: str = field(default=None)
    name_match_candidates_out: Optional[shared.NameMatchCandidatesOut] = field(default=None)
    status_code: int = field(default=None)
    
