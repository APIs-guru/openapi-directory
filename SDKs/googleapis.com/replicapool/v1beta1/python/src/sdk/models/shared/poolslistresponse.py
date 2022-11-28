from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PoolsListResponse:
    next_page_token: Optional[str] = field(default=None)
    resources: Optional[List[Pool]] = field(default=None)
    
