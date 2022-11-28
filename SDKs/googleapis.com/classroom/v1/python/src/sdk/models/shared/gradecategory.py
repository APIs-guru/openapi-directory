from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GradeCategory:
    r"""GradeCategory
    Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
    """
    
    default_grade_denominator: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultGradeDenominator') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
