from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameLatinCandidatesBatchSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameLatinCandidatesBatchRequest:
    security: JapaneseNameLatinCandidatesBatchSecurity = field()
    request: Optional[shared.BatchFirstLastNameIn] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class JapaneseNameLatinCandidatesBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_name_match_candidates_out: Optional[shared.BatchNameMatchCandidatesOut] = field(default=None)
    
