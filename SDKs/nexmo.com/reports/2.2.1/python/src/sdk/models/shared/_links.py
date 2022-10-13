from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LinksDownloadReport:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class LinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class Links:
    download_report: Optional[LinksDownloadReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_report' }})
    self: Optional[LinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
