from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CourseWorkAssigneeModeEnum(str, Enum):
    ASSIGNEE_MODE_UNSPECIFIED = "ASSIGNEE_MODE_UNSPECIFIED"
    ALL_STUDENTS = "ALL_STUDENTS"
    INDIVIDUAL_STUDENTS = "INDIVIDUAL_STUDENTS"

class CourseWorkStateEnum(str, Enum):
    COURSE_WORK_STATE_UNSPECIFIED = "COURSE_WORK_STATE_UNSPECIFIED"
    PUBLISHED = "PUBLISHED"
    DRAFT = "DRAFT"
    DELETED = "DELETED"

class CourseWorkSubmissionModificationModeEnum(str, Enum):
    SUBMISSION_MODIFICATION_MODE_UNSPECIFIED = "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED"
    MODIFIABLE_UNTIL_TURNED_IN = "MODIFIABLE_UNTIL_TURNED_IN"
    MODIFIABLE = "MODIFIABLE"

class CourseWorkWorkTypeEnum(str, Enum):
    COURSE_WORK_TYPE_UNSPECIFIED = "COURSE_WORK_TYPE_UNSPECIFIED"
    ASSIGNMENT = "ASSIGNMENT"
    SHORT_ANSWER_QUESTION = "SHORT_ANSWER_QUESTION"
    MULTIPLE_CHOICE_QUESTION = "MULTIPLE_CHOICE_QUESTION"


@dataclass_json
@dataclass
class CourseWork:
    r"""CourseWork
    Course work created by a teacher for students of the course.
    """
    
    alternate_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateLink') }})
    assignee_mode: Optional[CourseWorkAssigneeModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assigneeMode') }})
    assignment: Optional[Assignment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignment') }})
    associated_with_developer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedWithDeveloper') }})
    course_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseId') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    creator_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorUserId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    due_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate') }})
    due_time: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueTime') }})
    grade_category: Optional[GradeCategory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeCategory') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    individual_students_options: Optional[IndividualStudentsOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individualStudentsOptions') }})
    materials: Optional[List[Material]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    max_points: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPoints') }})
    multiple_choice_question: Optional[MultipleChoiceQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleChoiceQuestion') }})
    scheduled_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledTime') }})
    state: Optional[CourseWorkStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    submission_modification_mode: Optional[CourseWorkSubmissionModificationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissionModificationMode') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    topic_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    work_type: Optional[CourseWorkWorkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workType') }})
    
