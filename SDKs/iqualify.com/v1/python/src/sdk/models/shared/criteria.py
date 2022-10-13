from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Criteria:
    has_completed_course: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasCompletedCourse' }})
    has_passed_mandatory_assessed_quizzes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasPassedMandatoryAssessedQuizzes' }})
    
