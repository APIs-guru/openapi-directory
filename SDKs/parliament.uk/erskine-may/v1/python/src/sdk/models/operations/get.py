from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPathParams:
    chapter_number: int = field(metadata={'path_param': { 'field_name': 'chapterNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRequest:
    path_params: GetPathParams = field()
    

@dataclass
class GetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    erskine_may_chapter_overview: Optional[shared.ErskineMayChapterOverview] = field(default=None)
    
