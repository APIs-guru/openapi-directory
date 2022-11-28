from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConceptRelation:
    concept_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_created') }})
    concept_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_id') }})
    concept_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_name') }})
    concept_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_status') }})
    concept_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_type') }})
    concept_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concept_updated') }})
    is_times_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_times_tag') }})
    vernacular: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vernacular') }})
    
