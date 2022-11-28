from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssignmentMarkResponse:
    assessment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentId') }})
    assessment_item_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentItemDetails') }})
    assessment_item_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentItemName') }})
    course_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseName') }})
    learner_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnerEmail') }})
    learner_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnerFirstName') }})
    learner_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnerLastName') }})
    learner_person_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnerPersonId') }})
    mark: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mark') }})
    mark_feedback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markFeedback') }})
    marked_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markedBy') }})
    marked_by_evaluator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markedByEvaluator') }})
    marked_by_facilitator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markedByFacilitator') }})
    marked_by_marker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markedByMarker') }})
    marked_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    submission_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
