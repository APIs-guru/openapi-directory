from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class OnedistributionsPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaIcon:
    height: Optional[int] = field(default=None)
    url: Optional[str] = field(default=None)
    width: Optional[int] = field(default=None)
    

@dataclass
class OnedistributionsPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8Schema:
    architecture: Optional[List[str]] = field(default=None)
    icon: Optional[List[OnedistributionsPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaIcon]] = field(default=None)
    id: Optional[int] = field(default=None)
    link: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    project: Optional[str] = field(default=None)
    reponame: Optional[str] = field(default=None)
    repository: Optional[str] = field(default=None)
    vendor: Optional[str] = field(default=None)
    version: Optional[str] = field(default=None)
    
