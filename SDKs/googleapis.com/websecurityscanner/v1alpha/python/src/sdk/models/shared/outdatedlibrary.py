from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OutdatedLibrary:
    r"""OutdatedLibrary
    Information reported for an outdated library.
    """
    
    learn_more_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnMoreUrls') }})
    library_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('libraryName') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
