from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateLibraryOptionsDto:
    r"""UpdateLibraryOptionsDto
    Update library options dto.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    library_options: Optional[LibraryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LibraryOptions') }})
    
