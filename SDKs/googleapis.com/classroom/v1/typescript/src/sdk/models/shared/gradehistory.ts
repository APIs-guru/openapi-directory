import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GradeHistoryGradeChangeTypeEnum {
    UnknownGradeChangeType = "UNKNOWN_GRADE_CHANGE_TYPE",
    DraftGradePointsEarnedChange = "DRAFT_GRADE_POINTS_EARNED_CHANGE",
    AssignedGradePointsEarnedChange = "ASSIGNED_GRADE_POINTS_EARNED_CHANGE",
    MaxPointsChange = "MAX_POINTS_CHANGE"
}


// GradeHistory
/** 
 * The history of each grade on this submission.
**/
export class GradeHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actorUserId" })
  actorUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeChangeType" })
  gradeChangeType?: GradeHistoryGradeChangeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=gradeTimestamp" })
  gradeTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=maxPoints" })
  maxPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=pointsEarned" })
  pointsEarned?: number;
}
