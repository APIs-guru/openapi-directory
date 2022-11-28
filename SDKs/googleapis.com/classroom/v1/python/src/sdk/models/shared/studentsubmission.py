from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class StudentSubmissionCourseWorkTypeEnum(str, Enum):
    COURSE_WORK_TYPE_UNSPECIFIED = "COURSE_WORK_TYPE_UNSPECIFIED"
    ASSIGNMENT = "ASSIGNMENT"
    SHORT_ANSWER_QUESTION = "SHORT_ANSWER_QUESTION"
    MULTIPLE_CHOICE_QUESTION = "MULTIPLE_CHOICE_QUESTION"

class StudentSubmissionStateEnum(str, Enum):
    SUBMISSION_STATE_UNSPECIFIED = "SUBMISSION_STATE_UNSPECIFIED"
    NEW = "NEW"
    CREATED = "CREATED"
    TURNED_IN = "TURNED_IN"
    RETURNED = "RETURNED"
    RECLAIMED_BY_STUDENT = "RECLAIMED_BY_STUDENT"


@dataclass_json
@dataclass
class StudentSubmission:
    r"""StudentSubmission
    Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
    """
    
    alternate_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateLink') }})
    assigned_grade: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedGrade') }})
    assignment_submission: Optional[AssignmentSubmission] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignmentSubmission') }})
    associated_with_developer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedWithDeveloper') }})
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    course_work_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseWorkId') }})
    course_work_type: Optional[StudentSubmissionCourseWorkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseWorkType') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    draft_grade: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draftGrade') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    late: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('late') }})
    multiple_choice_submission: Optional[MultipleChoiceSubmission] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleChoiceSubmission') }})
    short_answer_submission: Optional[ShortAnswerSubmission] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortAnswerSubmission') }})
    state: Optional[StudentSubmissionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    submission_history: Optional[List[SubmissionHistory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissionHistory') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
