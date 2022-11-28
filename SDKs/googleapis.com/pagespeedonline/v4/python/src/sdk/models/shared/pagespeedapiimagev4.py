from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PagespeedAPIImageV4PageRect:
    height: Optional[int] = field(default=None)
    left: Optional[int] = field(default=None)
    top: Optional[int] = field(default=None)
    width: Optional[int] = field(default=None)
    

@dataclass
class PagespeedAPIImageV4:
    data: Optional[str] = field(default=None)
    height: Optional[int] = field(default=None)
    key: Optional[str] = field(default=None)
    mime_type: Optional[str] = field(default=None)
    page_rect: Optional[PagespeedAPIImageV4PageRect] = field(default=None)
    width: Optional[int] = field(default=None)
    
