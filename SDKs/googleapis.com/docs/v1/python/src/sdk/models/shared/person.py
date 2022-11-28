from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Person:
    r"""Person
    A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
    """
    
    person_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personId') }})
    person_properties: Optional[PersonProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personProperties') }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionIds') }})
    suggested_text_style_changes: Optional[dict[str, SuggestedTextStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedTextStyleChanges') }})
    text_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyle') }})
    

@dataclass_json
@dataclass
class PersonInput:
    r"""PersonInput
    A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.
    """
    
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionIds') }})
    suggested_text_style_changes: Optional[dict[str, SuggestedTextStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedTextStyleChanges') }})
    text_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyle') }})
    
