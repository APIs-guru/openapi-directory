from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PagespeedAPIFormatStringV4ArgsRects:
    height: Optional[int] = field(default=None)
    left: Optional[int] = field(default=None)
    top: Optional[int] = field(default=None)
    width: Optional[int] = field(default=None)
    

@dataclass
class PagespeedAPIFormatStringV4ArgsSecondaryRects:
    height: Optional[int] = field(default=None)
    left: Optional[int] = field(default=None)
    top: Optional[int] = field(default=None)
    width: Optional[int] = field(default=None)
    

@dataclass
class PagespeedAPIFormatStringV4Args:
    key: Optional[str] = field(default=None)
    rects: Optional[List[PagespeedAPIFormatStringV4ArgsRects]] = field(default=None)
    secondary_rects: Optional[List[PagespeedAPIFormatStringV4ArgsSecondaryRects]] = field(default=None)
    type: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    

@dataclass
class PagespeedAPIFormatStringV4:
    args: Optional[List[PagespeedAPIFormatStringV4Args]] = field(default=None)
    format: Optional[str] = field(default=None)
    
