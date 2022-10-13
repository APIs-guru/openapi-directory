from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GradeHistoryGradeChangeTypeEnum(str, Enum):
    UNKNOWN_GRADE_CHANGE_TYPE = "UNKNOWN_GRADE_CHANGE_TYPE"
    DRAFT_GRADE_POINTS_EARNED_CHANGE = "DRAFT_GRADE_POINTS_EARNED_CHANGE"
    ASSIGNED_GRADE_POINTS_EARNED_CHANGE = "ASSIGNED_GRADE_POINTS_EARNED_CHANGE"
    MAX_POINTS_CHANGE = "MAX_POINTS_CHANGE"


@dataclass_json
@dataclass
class GradeHistory:
    actor_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actorUserId' }})
    grade_change_type: Optional[GradeHistoryGradeChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradeChangeType' }})
    grade_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradeTimestamp' }})
    max_points: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPoints' }})
    points_earned: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointsEarned' }})
    
