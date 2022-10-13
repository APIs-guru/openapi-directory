from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPathParams:
    chapter_number: int = field(default=None, metadata={'path_param': { 'field_name': 'chapterNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRequest:
    path_params: GetPathParams = field(default=None)
    

@dataclass
class GetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    erskine_may_chapter_overview: Optional[shared.ErskineMayChapterOverview] = field(default=None)
    status_code: int = field(default=None)
    
