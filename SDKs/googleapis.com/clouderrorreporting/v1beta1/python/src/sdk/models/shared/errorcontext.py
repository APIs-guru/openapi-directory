from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httprequestcontext
from . import sourcelocation
from . import sourcereference


@dataclass_json
@dataclass
class ErrorContext:
    http_request: Optional[httprequestcontext.HTTPRequestContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRequest' }})
    report_location: Optional[sourcelocation.SourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportLocation' }})
    source_references: Optional[List[sourcereference.SourceReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceReferences' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
