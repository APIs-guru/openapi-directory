from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PagespeedAPIFormatStringV2ArgsRects:
    height: Optional[int] = field(default=None)
    left: Optional[int] = field(default=None)
    top: Optional[int] = field(default=None)
    width: Optional[int] = field(default=None)
    

@dataclass
class PagespeedAPIFormatStringV2ArgsSecondaryRects:
    height: Optional[int] = field(default=None)
    left: Optional[int] = field(default=None)
    top: Optional[int] = field(default=None)
    width: Optional[int] = field(default=None)
    

@dataclass
class PagespeedAPIFormatStringV2Args:
    key: Optional[str] = field(default=None)
    rects: Optional[List[PagespeedAPIFormatStringV2ArgsRects]] = field(default=None)
    secondary_rects: Optional[List[PagespeedAPIFormatStringV2ArgsSecondaryRects]] = field(default=None)
    type: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    

@dataclass
class PagespeedAPIFormatStringV2:
    args: Optional[List[PagespeedAPIFormatStringV2Args]] = field(default=None)
    format: Optional[str] = field(default=None)
    
