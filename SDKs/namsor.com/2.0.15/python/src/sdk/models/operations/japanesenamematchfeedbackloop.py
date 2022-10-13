from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JapaneseNameMatchFeedbackLoopPathParams:
    japanese_given_name_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseGivenNameLatin', 'style': 'simple', 'explode': False }})
    japanese_name: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseName', 'style': 'simple', 'explode': False }})
    japanese_surname_latin: str = field(default=None, metadata={'path_param': { 'field_name': 'japaneseSurnameLatin', 'style': 'simple', 'explode': False }})
    

@dataclass
class JapaneseNameMatchFeedbackLoopSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class JapaneseNameMatchFeedbackLoopRequest:
    path_params: JapaneseNameMatchFeedbackLoopPathParams = field(default=None)
    security: JapaneseNameMatchFeedbackLoopSecurity = field(default=None)
    

@dataclass
class JapaneseNameMatchFeedbackLoopResponse:
    content_type: str = field(default=None)
    feedback_loop_out: Optional[shared.FeedbackLoopOut] = field(default=None)
    status_code: int = field(default=None)
    
