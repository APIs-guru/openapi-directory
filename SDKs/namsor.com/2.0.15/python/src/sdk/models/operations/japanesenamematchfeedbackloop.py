from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameMatchFeedbackLoopPathParams:
    japanese_given_name_latin: str = field(metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_name: str = field(metadata={'path_param': { 'field_name': 'japaneseName', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = field(metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclass
class JapaneseNameMatchFeedbackLoopSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameMatchFeedbackLoopRequest:
    path_params: JapaneseNameMatchFeedbackLoopPathParams = field()
    security: JapaneseNameMatchFeedbackLoopSecurity = field()
    

@dataclass
class JapaneseNameMatchFeedbackLoopResponse:
    content_type: str = field()
    status_code: int = field()
    feedback_loop_out: Optional[shared.FeedbackLoopOut] = field(default=None)
    
