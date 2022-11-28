from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TimelineListResponse:
    r"""TimelineListResponse
    A list of timeline items. This is the response from the server to GET requests on the timeline collection.
    """
    
    items: Optional[List[TimelineItem]] = field(default=None)
    kind: Optional[str] = field(default=None)
    next_page_token: Optional[str] = field(default=None)
    
