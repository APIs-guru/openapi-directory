from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameGenderKanjiCandidatesBatchSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameGenderKanjiCandidatesBatchRequest:
    request: Optional[shared.BatchFirstLastNameGenderIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: JapaneseNameGenderKanjiCandidatesBatchSecurity = field(default=None)
    

@dataclass
class JapaneseNameGenderKanjiCandidatesBatchResponse:
    batch_name_match_candidates_out: Optional[shared.BatchNameMatchCandidatesOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
