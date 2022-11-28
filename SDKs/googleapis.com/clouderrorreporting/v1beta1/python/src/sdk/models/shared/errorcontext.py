from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorContext:
    r"""ErrorContext
    A description of the context in which an error occurred. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
    """
    
    http_request: Optional[HTTPRequestContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRequest') }})
    report_location: Optional[SourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportLocation') }})
    source_references: Optional[List[SourceReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceReferences') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
