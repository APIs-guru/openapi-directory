from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLabelLimits:
    r"""GoogleAppsDriveLabelsV2betaLabelLimits
    Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
    """
    
    field_limits: Optional[GoogleAppsDriveLabelsV2betaFieldLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldLimits') }})
    max_deleted_fields: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDeletedFields') }})
    max_description_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDescriptionLength') }})
    max_draft_revisions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDraftRevisions') }})
    max_fields: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFields') }})
    max_title_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTitleLength') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
