from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModelVersion:
    r"""ModelVersion
    Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.
    """
    
    dated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dated') }})
    major: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('major') }})
    minor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minor') }})
    patch: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patch') }})
    
