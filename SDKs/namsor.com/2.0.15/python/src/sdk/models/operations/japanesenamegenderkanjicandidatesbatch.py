from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameGenderKanjiCandidatesBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameGenderKanjiCandidatesBatchRequest:
    security: JapaneseNameGenderKanjiCandidatesBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNameGenderIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class JapaneseNameGenderKanjiCandidatesBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_name_match_candidates_out: Optional[shared.BatchNameMatchCandidatesOut] = field(default=None)
    
