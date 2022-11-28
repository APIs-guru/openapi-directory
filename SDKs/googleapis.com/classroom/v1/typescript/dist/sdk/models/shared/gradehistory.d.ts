import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GradeHistoryGradeChangeTypeEnum {
    UnknownGradeChangeType = "UNKNOWN_GRADE_CHANGE_TYPE",
    DraftGradePointsEarnedChange = "DRAFT_GRADE_POINTS_EARNED_CHANGE",
    AssignedGradePointsEarnedChange = "ASSIGNED_GRADE_POINTS_EARNED_CHANGE",
    MaxPointsChange = "MAX_POINTS_CHANGE"
}
/**
 * The history of each grade on this submission.
**/
export declare class GradeHistory extends SpeakeasyBase {
    actorUserId?: string;
    gradeChangeType?: GradeHistoryGradeChangeTypeEnum;
    gradeTimestamp?: string;
    maxPoints?: number;
    pointsEarned?: number;
}
