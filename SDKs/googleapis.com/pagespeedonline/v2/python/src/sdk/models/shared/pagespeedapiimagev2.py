from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PagespeedAPIImageV2PageRect:
    r"""PagespeedAPIImageV2PageRect
    The region of the page that is captured by this image, with dimensions measured in CSS pixels.
    """
    
    height: Optional[int] = field(default=None)
    left: Optional[int] = field(default=None)
    top: Optional[int] = field(default=None)
    width: Optional[int] = field(default=None)
    

@dataclass
class PagespeedAPIImageV2:
    data: Optional[str] = field(default=None)
    height: Optional[int] = field(default=None)
    key: Optional[str] = field(default=None)
    mime_type: Optional[str] = field(default=None)
    page_rect: Optional[PagespeedAPIImageV2PageRect] = field(default=None)
    width: Optional[int] = field(default=None)
    
